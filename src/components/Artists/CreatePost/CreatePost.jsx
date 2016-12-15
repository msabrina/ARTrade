import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import { Link } from 'react-router';
import styles from './CreatePost.css';


class CreatePost extends Component {
constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      imageCount: 0,
      filesArray: [],
      imageShow: null,
      selectValue: '',
      fair_id: 1,
    };
  }
// function to set the state of the input fields and send it back up to app

// Code acquired from React DropZone documentation and decoded by Joey Pinhas.
  onImageDrop (images) {
    // get current image count and array of files and store them in local variables of the same name
    let imageCount = this.state.imageCount;
    let filesArray = this.state.filesArray;
    // if the array of files is null, create a new empty array
    if (!filesArray) filesArray = [];
    // loop through the images received from react dropzone
    images.forEach((image) => {
      // for each image, add a new object to the local array of files that holds the title of the input field and the actual image
      filesArray.push({
        title: `image-${imageCount + 1}`,
        pic: image,
      });
      // increment the local image count
      imageCount++;
    });
    // call the showImages method and save the return values in a local variable
    // showImages takes in an array of files and creates <img> react components for each image
    const imageShow = this.showImages(filesArray);
    // set the state of all the things we changed in this onImageDrop method
    this.setState({
      filesArray: filesArray,
      imageCount: imageCount,
      imageShow: imageShow,
    });
  }

  showImages(fsArr) {
    if (fsArr) {
      return fsArr.map((file, i) => <img className={styles['uploaded-image']} src={file.pic.preview} alt="uploaded file" key={i} />)
    }
  }

  postProduct(e) {
    e.preventDefault();
    // create a variable to store the data you are posting in the body
    const form = new FormData();
    form.append('title', this.state.title);
    form.append('description', this.state.description);
    form.append('image_url', this.state.image);
    form.append('image', this.state.image);
    form.append('fair_id', this.state.fair_id);
    this.state.filesArray.forEach((file) => form.append('image', file.pic));
    const token = localStorage.getItem('userAuthToken');
    fetch('/api/artists/mypost', {
      headers: new Headers ({
        Token_Authorization: token,
      }),
      method: 'POST',
      body: form,
    })
    .then(r => r.json())
    .then((product) => {
      console.log(product);
      this.props.appendNewImage(product.image_url, product.fair_id);
      this.setState({
        imageCount: 0,
        filesArray: [],
        imageShow: null,
      })
    })
    .catch(err => console.log(err));
  }

  titleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  priceChange(e) {
    this.setState({
      price: e.target.value,
    });
  }

  descChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  buildOptions() {
    const fairs = this.props.fairs;
    return fairs.map((fair, i) => <option key={i} value={fair.fair_id}>{fair.title}</option>)
  }

  selectChange(e) {
    this.setState({
      fair_id: e.target.value,
    });
  }

  render() {
    return (
      <div className={styles["create-post"]}>
        <h1>Create Post:</h1>
          <p>Images:</p>
          <DropZone
            className={styles['drop-zone']}
            multiple={true}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
          </DropZone>
        <div className={styles['image-drop']}>
          {this.state.imageShow || ''}
          <select className={styles["select-fairs"]} value={this.state.fair_id} onChange={this.selectChange.bind(this)}>
            {this.buildOptions()}
          </select>
        </div>
        <div className={styles['title-box']}>
          <p>Title:</p>
          <input type="text" value={this.state.title} onChange={this.titleChange.bind(this)} />
        </div>
        <div className={styles["description-box"]}>
          <p>Description:</p>
          <textarea value={this.state.description} onChange={this.descChange.bind(this)}/>
        </div>
        <button className={styles["submit-button"]} onClick={this.postProduct.bind(this)}>Submit</button>
      </div>
    );
  }

}

export default CreatePost;
        // <showImages files={this.state.files} />
        // <img src={this.state.files ? this.state.file.preview : ''} alt="ha"/>
        // <Link to="/profile"><button> Create Post </button></Link>

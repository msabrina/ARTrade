import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import styles from './App.css';
import Artists from './Artists/Artists.jsx';
// import Fairs from './Fairs/Fairs.jsx';
import Header from './Header/Header.jsx';
import FairsList from './Header/Fairs/FairsList/FairsList.jsx';

// const showLoginModal = isLoggedIn => {
//   if (isLoggedIn) {
//     return (
//       <UserAuth />
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      fairs: [],
      merged: [],
      activeFair: {
        posts: [],
        fair: [],
      },
      image: '',
      image_url: 'testing',
      fair_id: '',
      // history:[<put main component here />],
      // current: <current component />
    };
  }

  componentWillMount() {
    this.getUserInfo();
    this.getFairsList();
  }


// Code acquired from Bobby King at https://github.com/gittheking/history
  // switchComponent(comp) {
  //   const history = this.state.history;
  //   history.push(comp);
  //   this.setState({
  //     history,
  //     current: comp
  //   });
  // }

  // goBack() {
  //   const history = this.state.history;
  //   if(history.length > 1) {
  //     history.pop()
  //     this.setState({
  //       history,
  //       current: history[history.length - 1]
  //     });
  //   }
  // }
  getUserInfo() {
    const token = localStorage.getItem('userAuthToken');
    console.log('here 2');
    fetch('/api/users', {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Token_Authorization': token,
      }),
      method: 'GET',
    })
    .then(r => r.json())
    .then((userData) => {
      console.log(userData);
      this.setState({
        userData: userData,
      })
    })
    .catch(err => console.log(err));
  }

  getFairsList() {
    console.log('RETRIEVING')
    const token = localStorage.getItem('userAuthToken');
    fetch('/api')
    .then(r => r.json())
    .then((data) => {
      console.log('====',data);
      const merged = this.matchPostsToFairs(data.fairs, data.posts);
      this.setState({
        fairs: data.fairs,
        posts: data.posts,
        merged: merged,
        activeFair: merged[0],
      });
    })
    .catch(err => console.log(err));
  }

//Thank you Joey Pinhas for this gem!
  matchPostsToFairs(fairs, posts) {
    let merged = [];

    fairs.forEach((fair) => {
      let obj = {};
      obj.fair = fair;
      obj.fair_id = fair.fair_id;
      let thesePosts = [];
      posts.forEach((post) => {
        if (post.fair_id == fair.fair_id) {
          thesePosts.push(post);
        }
      });
      obj.posts = thesePosts;
      merged.push(obj);
    });
    return merged;
  }

  appendNewImage(image, id) {
    const fairs = this.state.fairs;
    fairs[id - 1].image = image;
    this.setState({
      fairs: fairs,
    });
  }

  // mutator function changes slected product
  // Code acquired from FireHouse lab.
  changeFair(item) {
    console.log('hello',item);
    this.setState({
      activeFair: this.state.merged[item],
      // image: this.state.image[item]
    });
    browserHistory.push('/fair');
  }

  // click(i) {
  //   this.setState({
  //     activeFair: this.state.fairs[i],
  //   });
  // }

  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Lato|Noto+Sans" rel="stylesheet" />
        <Header
          merged={this.state.merged}
          fairs={this.state.fairs}
          changeFair={this.changeFair.bind(this)}
        />
        <Artists
          fairs={this.state.fairs}
          appendNewImage={this.appendNewImage.bind(this)}
        />
        {this.props.children && React.cloneElement(this.props.children, {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          fairs: this.state.fairs,
          changeFair: this.state.changeFair,
          getFairsList: this.state.getFairsList,
          displayFairsList: this.state.displayFairsList,
          activeFair: this.state.activeFair,
          image: this.state.image,
          image_url: this.state.image_url,
          merged: this.state.merged,
        })
        }

      </div>
    );
  }
}

export default App;

        // <div className={styles["Header"]}>
        //   <Header />
        // </div>
        // {showLoginModal(this.state.isLoggedIn)}
        // <Artists />
        // <input type="text" />


      // <FairList
        // title={this.state.activeFair.title}
        // description={this.state.activeFair.description}
        // images={this.state.activeFair.images}
        // clickMethod={this.click.bind(this)}
      // />




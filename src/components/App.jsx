import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import styles from './App.css';
// import Artists from './Artists/Artists.jsx';
// import Fairs from './Fairs/Fairs.jsx';
import UserAuth from './UserAuth/UserAuth.jsx';
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
      activeFair: {},
      image: '',
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
      this.setState({
        fairs: data,
        activeFair: data[0],
      });
    })
    .catch(err => console.log(err));
  }

  appendNewProduct(image) {
    const allImages = this.state.images;
    allProducts.push(image);
    this.setState({
      products: allProducts,
    });
  }

  // mutator function changes slected product
  // Code acquired from FireHouse lab.
  changeFair(item) {
    console.log('hello',item);
    this.setState({
      activeFair: this.state.fairs[item]
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
        <Header
          fairs={this.state.fairs}
          changeFair={this.changeFair.bind(this)}
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

      /*
        <FairsList
          title={this.state.activeFair.title}
          description={this.state.activeFair.description}
          images={this.state.activeFair.images}
        />
        */

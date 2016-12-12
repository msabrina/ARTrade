import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import styles from './App.css';
// import Artists from './Artists/Artists.jsx';
// import Fairs from './Fairs/Fairs.jsx';
import UserAuth from './UserAuth/UserAuth.jsx';
import Header from './Header/Header.jsx';

const showLoginModal = isLoggedIn => {
  if (isLoggedIn) {
    return (
      <UserAuth />
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      fairs: [
        // {name: 'Art basel'},
        // {name: 'Art basel'},
        // {name: 'Art basel'},
        // {name: 'Art basel'},
        // {name: 'Art basel'},
        // {name: 'Art basel'}
      ],
      activeFair: {}
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
    const token = localStorage.getItem('userAuthToken');
    fetch('/api/fairs', {
      headers: new Headers ({
        Token_Authorization: token,
        'Content-Type': 'application/json',
      }),
      method: 'GET',
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      this.setState({
        fairs: data,
        activeFair: data[0],
      });
    })
    .catch(err => console.log(err));
  }

  // mutator function changes slected product
  // Code acquired from FireHouse lab.
  changeFair(item) {
    console.log('hello',item);
    this.setState({
      activeProduct: item,
    });
    browserHistory.push('/fairs')
  }

  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          fairs: this.state.fairs,
          changeFair: this.state.changeFair,
          getFairsList: this.state.getFairsList,
          displayFairsList: this.state.displayFairsList,
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

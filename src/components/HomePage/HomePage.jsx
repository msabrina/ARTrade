import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './HomePage.css';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }
// Code adopted from ChairShare App.
  doLogin(e) {
    console.log('here')
    e.preventDefault();
    const bodyObj = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(bodyObj);
    fetch('/api/users/login', {
      headers: new Headers({
        'Content-Type': 'application/json',
    }),
      method: 'POST',
      body: JSON.stringify(bodyObj)
    })
    .then(r => r.json())
    .then(token => {
      console.log(token);
      localStorage.setItem('userAuthToken', token);
    })
    .catch(err => console.log(err));
  }

  updateEmailLogIn(e) {
    this.setState({
      email: e.target.value,
    });
  }

  updatePasswordLogIn(e) {
    this.setState({
      password: e.target.value,
    });
  }

  createUser(e) {
    e.preventDefault();
    const bodyObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    fetch('/api/users', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(bodyObj)
    })
    .then(r => r.json())
    .then((token) => {
      localStorage.setItem('userAuthToken', token);
      browserHistory.push('/app/profile');
    })
    .catch(err => console.log(err));
  }

  updateNameForm(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  updateLastForm(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  updatePasswordForm(e) {
    this.setState({
      password: e.target.value,
    });
  }

  updateEmailForm(e) {
    this.setState({
      email: e.target.value,
    });
  }


  render() {
    return (
      <div className={styles["home-page"]}>
        <div className={styles["home-header"]}>
          <h1 className={styles["ARTrade"]}>ARTrade: &#x2765; </h1>
        </div>
        <div className={styles['content-box']}>
          <div className={styles['log-user']}>
            <h1>Log In</h1>
          <div className={styles['email-box']}>
            <p id={styles['email']}>Email</p>
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateEmailLogIn.bind(this)}
            />
          </div>
          <div className={styles['password-box']}>
            <p id={styles['password']}>Password</p>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.updatePasswordLogIn.bind(this)}
            />
          </div>
          <button><Link className={styles['log-button']} to="/fair"> Log In </Link></button>
          </div>

        <div className={styles['create-user']}>
          <h1>Create Account</h1>
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.updateNameForm.bind(this)}
            />
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.updateLastForm.bind(this)} />
            <p>Email</p>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateEmailForm.bind(this)}
            />
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.updatePasswordForm.bind(this)}
            />
            <Link className={styles['login']} to="/fair"><button> Submit </button></Link>
        </div>
      </div>
    </div>
    );
  }
}

export default HomePage;

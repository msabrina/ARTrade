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

  updateEmailForm(e) {
    this.setState({
      email: e.target.value,
    });
  }

  updatePasswordForm(e) {
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


  render() {
    return (
      <div className={styles["home-page"]}>
      <div className={styles["auth-home"]}>
      <form className={styles['log-box']}>
        <div className={styles["home-logo"]}>
          <img src="" alt="Logo" />
          <h1>ARTrade</h1>
        </div>
        <div className={styles['home-about']}>
          <p>The most comprehensive forum for International Art Fairs!</p>
        <div className={styles['input-box']}>
          <div className={styles['email-box']}>
            <p id={styles['email']}>Email</p>
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateEmailForm.bind(this)}
            />
          </div>
          <div className={styles['password-box']}>
            <p id={styles['password']}>Password</p>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.updatePasswordForm.bind(this)}
            />
          </div>
          <button><Link className={styles['app-button']} to="/app"> Log In </Link></button>
        </div>
        </div>
      </form>
          <div className={styles['link']}>
            <Link className={styles['home-button']} to="/create"><button>Create Account</button></Link>
            <Link className={styles['home-button']} to="/login"><button>Log In</button></Link>
          </div>
      </div>

      <div className={styles['create-user']}>
        <div className={styles["home-logo"]}>
          <img src="/chairShare.png" alt="Logo" />
      </div>
      <div className={styles["home-content"]}>
          <h2>Sign Up</h2>
        <div className={styles["home-input"]}>
          <p>First Name</p>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.updateNameForm.bind(this)} />
        </div>
        <div className={styles["home-input"]}>
          <p>Last Name</p>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.updateLastForm.bind(this)} />
        </div>
        <div className={styles["home-input"]}>
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
          />
        </div>
        <div className={styles["home-input"]}>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.updatePasswordForm.bind(this)} />
        </div>
      <Link className={styles['login']} to="/app"><button> Submit </button></Link>
      </div>
      </div>
      </div>
    );
  }
}

export default HomePage;

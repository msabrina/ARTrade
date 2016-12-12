import React, { Component } from 'react';
// import { Link } from 'react-router';
import styles from './LogIn.css';


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
// Code adopted from CharShare App.
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

render() {
    return (
      <div className={styles['log-in']}>
        <form className={styles['log-box']}>
          <div className={styles["home-logo"]}>
            <img src="/chairShare.png" alt="Logo" />
            <h1>ARTrade</h1>
          </div>
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
        </form>
      </div>
    );
  }
}

export default LogIn;

// onClick={this.doLogin.bind(this)}

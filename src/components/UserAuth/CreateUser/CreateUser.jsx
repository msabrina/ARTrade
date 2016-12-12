import React,  { Component }from 'react';
// import { Link, browserHistory } from 'react-router';
import styles from './CreateUser.css';

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
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
        <div className={styles['create-user']}>
        <div className={styles["home-logo"]}>
          <img src="/chairShare.png" alt="Logo" />
          <h1>chairShare</h1>
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

export default CreateUser;

// onClick={this.createUser.bind(this)}

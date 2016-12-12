import React, { Component } from 'react';

class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  onClickMethod(e) {
    fetch('/login')
    .then(r => r.json())
    .then(data => {
      const modal = this.refs.signup;
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
      } else {
        modal.style.display = 'block';
      }
      // modal.style.display = (disp === 'block' ? 'none' : 'block');
    })
  }

  render() {
    return (
      <div className="login-box">
        <LogIn />
        <button
          id="login-button"
          // onClick={this.props.handleLogin}
        >
        Log In
        </button>
        <CreateUser />
        <div className="signup" ref="signup">
        <button id="signupModal" onClick={this.onClickMethod.bind(this)}>Sign Up</button>
        <button id="signup-form-button" onClick={this.props.handleSignup}>
              Sign Up
            </button>
          </div>
        </div>
    );
  }
}

export default UserAuth;

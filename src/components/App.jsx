import React, { Component } from 'react';
import styles from './App.css';
// import Artists from './Artists/Artists.jsx';
// import Fairs from './Fairs/Fairs.jsx';
// import UserAuth from './UserAuth/UserAuth.jsx';
import Header from './Header/Header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // history:[<put main component here />],
      // current: <current component />
    };
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

  render() {
    return (
      <div>
        <Header />

      </div>
    );
  }
}

export default App;


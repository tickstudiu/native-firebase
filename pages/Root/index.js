import React from 'react';
import { View, Text } from 'react-native';
import Login from '../Login';
import Home from '../Home';

export default class App extends React.Component {
  state = { auth: false, email: ''};

  handleAuth = (email) => {
    this.setState({
      auth: true,
      email: email,
    })
  }

  render() {
    const {auth, email} = this.state;
    const {handleAuth} = this;

    if (!auth) {
      return(
          <Login handleAuth={handleAuth}/>
      );
    }else{
      return(
          <Home email={email}/>
      );
    }
  }
}

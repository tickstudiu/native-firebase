import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Config from 'react-native-config';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import Loader from './components/Loader';
import Root from './pages/Root';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 500)
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBUlp98OH1BEI27RzaQ3PNf98C8c2zkyqU",
      authDomain: "native-firebase-assginment.firebaseapp.com",
      databaseURL: "https://native-firebase-assginment.firebaseio.com",
      projectId: "native-firebase-assginment",
      storageBucket: "native-firebase-assginment.appspot.com",
      messagingSenderId: "952465302721"
    });
  }

  render() {
    const { loading } = this.state;

    if(loading){
      return(
        <Loader/>
      );
    }else{
      return (
        <Root/>
      );
    }
  }
}

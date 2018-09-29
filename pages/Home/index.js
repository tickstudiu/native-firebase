import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../../assets/style';
import Loader from '../../components/Loader';
import { createStackNavigator } from 'react-navigation';
import MainRoute from '../../screens/main';
import DevRoute from '../../screens/dev'

const RootStack = createStackNavigator({
 Main: MainRoute,
 Dev: DevRoute,
},{
  initialRouteName: 'Main',
})

export default class Home extends React.Component {
  state = {loading: true,};

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1500)
  }


  render(){
    const { email } = this.props;
    const { loading } = this.state;

    if(loading){
      return(
        <Loader/>
      );
    }else{
      return (
        <RootStack screenProps={{ user: email }}/>
      );
    }
  }
}

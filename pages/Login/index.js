import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../../assets/style';
import LoginForm from '../../components/Common/LoginForm';

export default class Login extends React.Component {
  render(){
    const {handleAuth} = this.props;

    return(
      <View style={Styles.containerLogin}>
        <View>
          <Text style={Styles.display4}>Login <Text style={Styles.textPrimary}>And</Text></Text>
          <Text style={Styles.display4}>Register</Text>
        </View>
        <View>
          <Text style={Styles.display2}>Welcome...</Text>
          <Text style={Styles.small}>Sign to Application</Text>
        </View>
        <LoginForm handleAuth={handleAuth}/>
      </View>
    );
  }
}

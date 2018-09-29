import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import ProfileImage from '../assets/image/profile.jpg'
import ArrowGo from '../assets/image/arrow-go.png';
import Styles from '../assets/style';

export default class Home extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <View style={Styles.ml1}>
          <Image
            style={Styles.navImg}
            source={ProfileImage}
          />
        </View>
      ),
      headerTitle: (
        <View>
          <Text style={Styles.title}>Main</Text>
        </View>
      ),
      headerRight: (
        <View style={Styles.mr1}>
          <TouchableHighlight onPress={() => navigation.navigate('Dev')}>
            <Image
              style={Styles.navImg}
              source={ArrowGo}
            />
          </TouchableHighlight>
        </View>
      )
    }
  }

  render(){
    const { user } = this.props.screenProps

    return (
      <View style={Styles.containerMain}>
        <Text>{user}</Text>
      </View>
    );
  }
}

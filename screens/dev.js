import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import ArrowGo from '../assets/image/arrow-go.png';
import Styles from '../assets/style';

export default class Dev extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <View style={Styles.mr1}>
          <TouchableHighlight onPress={() => navigation.navigate('Main')}>
            <Image
              style={Styles.navImg}
              source={ArrowGo}
            />
          </TouchableHighlight>
        </View>
      ),
      headerTitle: (
        <View>
          <Text style={Styles.title}>Dev</Text>
        </View>
      ),
      headerRight: (
        <Text>
        </Text>
      )
    }
  }

  render(){
    return (
      <View style={Styles.containerMain}>
        <Text>Create By <Text style={Styles.textPrimary}>Tickstudiu</Text></Text>
      </View>
    );
  }
}

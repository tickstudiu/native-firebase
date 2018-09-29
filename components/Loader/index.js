import React from 'react';
import Styles from '../../assets/style';
import LoadingImage from '../../assets/loading/loading.gif';
import { View, Image } from 'react-native';

export default class Loader extends React.Component {

  render() {
    return (
      <View style={Styles.containerCenter}>
        <Image source={LoadingImage} style={Styles.loader}/>
      </View>
    );
  }
}

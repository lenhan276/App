import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logo from './images/homiteclogo.png';


export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
          {/* Logo */}
          <Image source={logo} style={styles.logo}/>
          {/* Logo */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        marginTop: hp('15%'),
    },
    logo: {
      width: 225,
      height: 100
    }
  });
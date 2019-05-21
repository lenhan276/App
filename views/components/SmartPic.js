import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import smartPic from './images/smart.png'


export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
         
          <Image source={smartPic} style={styles.logo}/>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp('5%'),
    },
    logo: {
      width: 170,
      height: 170
    }
  });
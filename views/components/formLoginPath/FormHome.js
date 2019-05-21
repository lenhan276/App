import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground} from 'react-native'
import NavigationService from '../NavigationService';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




class FormHome extends Component {
 
      render() {
        return (
            <View style ={styles.container}>
                <Text style = {{color: 'white', fontSize: 20}}>
                    This is main Home
                </Text>
                
            </View>
        );
    }
}

export default FormHome;

const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
  })
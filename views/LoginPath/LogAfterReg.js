import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native'
import background from '../components/images/blue_background.png'
import Logo from '../components/Logo';
import FormLogin from '../components/formLoginPath/FormLogin';
import NavigationService from '../components/NavigationService';
import { RadioButton } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Login extends Component {
  render() {
    return (
     
      <ImageBackground source={background} style={styles.backgroundContainer}>
          <Logo/>
        <View style = {styles.container}>
          <FormLogin/>
        </View>   
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    backgroundContainer: {
      flexDirection: 'column',
      flex: 1,
      width: null,
      height: null,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('22%'),
      },
      registTextCont: {
        justifyContent: 'flex-end',
        marginBottom: 50
      },
      RegistText: {
        color: 'rgba(69, 8, 135, 0.5)',
        fontSize: 16
      },
      registBtn: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
      },
    });
  
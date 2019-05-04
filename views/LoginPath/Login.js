import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'
import background from '../components/images/blue_background.png'
import Logo from '../components/Logo';
import FormLogin from '../components/formLoginPath/FormLogin';
import NavigationService from '../components/NavigationService';
import { RadioButton } from 'react-native-paper';


export default class Login extends Component {
  render() {
    return (
        <View>
          <FormLogin/>
        </View>
    )
  }
}

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
    registTextCont: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36,
    },
    RegistText: {
      color: 'rgba(69, 8, 135, 0.5)',
      fontSize: 16
    },
    registBtn: {
      color: 'black',
      fontSize: 16,
      fontWeight: '500'
    }
  });

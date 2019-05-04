import React, { Component } from 'react'
import NavigationService from '../NavigationService'
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, Alert, Button, ImageBackground } from 'react-native'
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { width: WIDTH } = Dimensions.get('window')
export default class FormLogin extends Component {

    constructor(props) {
      super(props)
      this.state = {email: "",password: ""}
      this.checkLogin = this.checkLogin.bind(this)
    }
      
    checkLogin(){
      const {email, password} = this.state
      if(email == "a" && password == "a" ){
        NavigationService.navigate('loginScreen');
      }
      else{
        Alert.alert(
          'Warning',
          'Your password or email was wrong',
          [{text: 'No, cancle'},
            {text: 'Yes, retry'}
        ])
      }
    }

  render() {
    return ( 
      <View style ={styles.container}>
            {/* Form login */}
            <View style={styles.inputContainer}>
              <IconEmail name={'gmail'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
              <TextInput
                  style={styles.input}
                  placeholder={'Email'}
                  defaultValue = {this.state.email}
                  onChangeText = {text => this.setState({email: text})}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid='transparent'
              />
            </View>

            <View style={styles.inputContainerPass}>
              <IconEmail name={'lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
              <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder={'Password'}
                  defaultValue = {this.state.password}
                  onChangeText = {text => this.setState({password: text})}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid='transparent'
              />
            </View>

            <TouchableOpacity style={styles.btnLogin} onPress={() => {
              this.checkLogin()
            }}>
                <Text style={styles.textBtnLogin}>LOGIN</Text>
            </TouchableOpacity>
          
            {/* Form Login */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('10%'),
    },
    inputContainer: {
      marginTop: 30
    },
    inputContainerPass: {
      marginTop: 10
    },
    input: {
      width: WIDTH - 55,
      height: 50,
      borderRadius: 25,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
      color: 'rgba(255, 255, 255, 0.7)',
      marginHorizontal: 25
    },
    inputIcon: {
      position: 'absolute',
      top: 10,
      left: 37
    },
    btnLogin: {
      height: 50,
      borderRadius: 25,
      backgroundColor: 'rgba(69, 8, 135, 1)',
      justifyContent: 'center',
      marginTop: hp('3%'),
      paddingHorizontal: 148,
      // marginBottom: 50
    },
    textBtnLogin: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: 20,
      textAlign: 'center'
    }
  });

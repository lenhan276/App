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
      marginTop: hp('5%'),
    },
    inputContainerPass: {
      marginTop: hp('1.5%'),
    },
    input: {
      width: WIDTH - wp('13.5%'),
      height: hp('6.5%'),
      borderRadius: 25,
      fontSize: hp('2%'),
      paddingLeft: wp('13%'),
      borderColor: 'white',
      borderWidth: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      marginHorizontal: wp('6%'),
    },
    inputIcon: {
      position: 'absolute',
      top: hp('1.2%'),
      left: wp('10%'),
    },
    btnLogin: {
      height: hp('7%'),
      borderRadius: 25,
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      marginTop: hp('3%'),
      paddingHorizontal: wp('36%'),
      // shadowColor: 'rgba(0,0,0, .4)', // IOS
      // shadowOffset: { height: 1, width: 1 }, // IOS
      // shadowOpacity: 1, // IOS
      // shadowRadius: 1, //IOS
      // elevation: 2, // Android
      // marginBottom: 50,
    },
    textBtnLogin: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: hp('2.5%'),
      textAlign: 'center'
    }
  });

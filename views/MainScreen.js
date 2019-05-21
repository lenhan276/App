import React, {Component} from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground } from 'react-native';
import FlipComponent from 'react-native-flip-component';

import Login from './LoginPath/Login';
import Register from './RegisterPath/Register';
import Logo from './components/Logo';

import background from './components/images/blue_background.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      loginText: 'Dont have an account yet? ',
      login: 'Register!',
    };
  }
  loginSwitch(isFlipped) {
    switch(isFlipped) {
      case false:
        this.setState({loginText: 'Already have an account? ', login: 'Login!'});
        return;
      default:
        this.setState({loginText: ' Have you not registered yet? ', login: 'Register!'});
        return;
    }
  }

  render() {
    return (
    <ImageBackground source={background} style={styles.backgroundContainer}>
          <Logo/>     
       <FlipComponent 
        isFlipped={this.state.isFlipped}
          frontView={
            <View style={styles.container}>  
              <Login/>
            </View>
          }
          backView={         
            <View style={styles.container}>
              <Register/>
            </View>          
          }
        />
        <View style={styles.registTextCont} >
          <Text style={styles.RegistText} onPress={() => {this.setState({isFlipped: !this.state.isFlipped}), this.loginSwitch(this.state.isFlipped)}}>
            {this.state.loginText} 
            <Text style={styles.registBtn}> {this.state.login} </Text>
          </Text>
        </View>

    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    backgroundContainer: {
      flexDirection: 'column',
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
    },
      container: {
        flex: 0.8,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: hp('15%'),
      },
      registTextCont: {
        justifyContent: 'flex-end',
        marginBottom: hp('7%'),
      },
      RegistText: {
        color: 'rgba(69, 8, 135, 0.5)',
        fontSize: hp('2.4%'),
      },
      registBtn: {
        color: 'black',
        fontSize: hp('2.4%'),
        fontWeight: '500'
      }
    });
  
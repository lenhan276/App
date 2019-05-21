import React, { Component } from 'react'
import NavigationService from '../NavigationService'
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, Alert, Button, ImageBackground, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Spinner from 'react-native-spinkit'
import SmartPic from '../../components/SmartPic'
import Smartconfig from 'react-native-smartconfig-ll';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

const { width: WIDTH } = Dimensions.get('window')
export default class FormLogin extends Component {

    constructor(props) {
      super(props)
      this.animated = new Animated.Value(0)
      this.state = {
        userwifi: "",password: "",
        // isVisible: false,
        // index: 0,
        // color: 'white',
        // types: ['Wave'],
        // status:"CONFIGURE",
        buttonState: 'configure'
      }
        // this.changeVisibility = this.changeVisibility.bind(this)
    }

    // OnVisibility() {
    //     this.setState({isVisible: true});
    //   }
    // OffVisibility(){
    //     this.setState({isVisible: false});
    // }
    changeVisibility() {
      this.setState({isVisible: !this.state.isVisible});
    }

    // animate(){
    //   Animated.timing(this.animated,{
    //     toValue:1,
    //     duration:2000,
    //   }).start()
    // }
    // changColor(){
    //   this.setState({
    //     color: '#'
    //   })
    // }

    Config = () =>{
        Smartconfig.start({
            type: 'esptouch', //or airkiss, now doesn't not effect
            ssid: 'TPTECHS',
            bssid: "", //"" if not need to filter (don't use null)
            password: 'Tptechs@1234',
            timeout: 50000 //now doesn't not effect
        }).then(function(results){
            //Array of device success do smartconfig
            changeVisibility(),
            alert(JSON.stringify(results))
            
        }).catch(function(error) {    
        });
    }
    render() {
      // const type = this.state.types[this.state.index]
        return ( 
          <View style ={styles.container}>

            <View style = {styles.headerContainer}>
                <Text style = {{ 
                color: 'white', 
                fontSize:hp('2.5%'),
                textAlign: 'center',
                }}>
                  Please enter your wifi user and password to complete configuration
                </Text>            
            </View>

                <View style={styles.inputContainer}>
                  <Icon name={'wifi'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
                  <TextInput
                      style={styles.input}
                      placeholder={'Userwifi'}
                      defaultValue = {this.state.userwifi}
                      onChangeText = {text => this.setState({userwifi: text})}
                      placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                      underlineColorAndroid='transparent'
                  />
                </View>
    
                <View style={styles.inputContainerPass}>
                  <Icon name={'lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
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
      
                {/* <TouchableOpacity style={styles.btnLogin} 
                  onPress={() => {
                      this.changeVisibility(),
                      this.animate()
                      this.Config()
                      this.setState({
                        status: "Configurating.."
                      })
                    }}
                  >
                  <View style ={styles.spinnerContainer}>
                    <Spinner isVisible ={this.state.isVisible} color = {this.state.color} size ={50} type ={type}/> 
                    <Animated.Text style={[styles.textBtnLogin,{opacity}]}>
                      {this.state.status}
                    </Animated.Text>
                  </View>
                </TouchableOpacity>  */}
                <CircleButton 
                  buttonState={this.state.buttonState} // "upload" or "uploading"
                  style ={{marginTop:hp('5%')}}
                  size ={hp('17%')}
                  gradientStart={{ x: 0.5, y: 1 }}
                  gradientEnd={{ x: 1, y: 1 }} 
                  states={{
                    configure: {
                      backgroundColors: ['#a6a6a6', '#bfbfbf'],
                      text: 'Configure',
                      onPress: () => {
                        this.setState({ buttonState: 'configuring' });
                      },
                    },
                    configuring: {
                      backgroundColors: ['#a6a6a6', '#bfbfbf'],
                      
                      text: 'Configurating...',
                      textAlign:'center',
                      spinnerSize: hp('5.5%'),
                      spinner: true,
                      onPress: () => {
                        this.setState({ buttonState: 'cancel' });
                      },
                    },
                    cancel: {
                      backgroundColors: ['#ff3333', '#ff8080'],
                      text: 'Cancel progress',
                      onPress: () => {
                        this.setState({ buttonState: 'configure' });
                      },
                    },
                  }}
                >
                </CircleButton>             
          </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: hp('10%'),
        },
        headerContainer:{
        width: wp('70%'),
        alignItems: 'center',
        borderColor: 'white',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: hp('3%')
        },
        inputContainer: {
          marginTop: hp('10%'),
        },
        inputContainerPass: {
          marginTop: hp('1.5%'),
        },
        input: {
          width: WIDTH - wp('13.5%'),
          height: hp('6.5%'),
          borderRadius: hp('2%'),
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
          height: 150,
          width: 150,
          borderColor: 'white',
          borderWidth: 1,
          borderRadius: 75,
          backgroundColor: 'rgba(52, 52, 52, 0.4)',
          justifyContent: 'center',
          marginTop: hp('7%'),
          // paddingHorizontal: wp('32%'),
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
        },
        spinnerContainer:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }
      });
    
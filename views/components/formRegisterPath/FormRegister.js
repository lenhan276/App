import {KeyboardAvoidingView} from 'react-native';
import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, TextInput } from 'react-native'
import { HelperText,} from 'react-native-paper';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwe from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../NavigationService'
import Modal from "react-native-modal";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { width: WIDTH } = Dimensions.get('window')
export default class FormRegister extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      username: "" ,
      registerText: "",
      isModalVisible1: false,
      isModalVisible2: false,
    }
  }

  _toggleModal1 = () =>
    this.setState({ isModalVisible1: !this.state.isModalVisible1 });

  _toggleModal2 = () =>
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });

  backtoLogin(){
    NavigationService.navigate('logAfterScreen');
  }
  checkRegister(){
    const {email, password, username} = this.state
      if((email && password && username) == ""){
        this._toggleModal1();
        this.setState({registerText: 'Please fill in your Registration'});   
    }
      if(((email && password) == "") && username !=""){
        this._toggleModal1();
        this.setState({registerText: 'Email and Password should not be empty'});
    }
      if(((email && username) == "") && password !=""){
        this._toggleModal1();
        this.setState({registerText: 'Username and Email should not be empty'});
    }
      if(((password && username) == "") && email !=""){
        this._toggleModal1();
        this.setState({registerText: 'Username and Password should not be empty'});
    }
      if((email == "") && (password && username) !=""){
        this._toggleModal1();        
        this.setState({registerText: 'Email should not be empty'});
    }
      if((password == "") && (email && username) !=""){
        this._toggleModal1();
        this.setState({registerText: 'Password should not be empty'});
    }
      if((username == "") && (password && email) !=""){
        this._toggleModal1();
        this.setState({registerText: 'Username should not be empty'});
    } 
      if((email && password && username) != ""){
        this._toggleModal2();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
      >
            {/* Form Register */}
            <View style={styles.inputContainer}>
              <IconFontAwe name={'user-o'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
              <TextInput
                  style={styles.input}
                  placeholder={'Username'}
                  defaultValue = {this.state.username}
                  onChangeText = {text => this.setState({username: text})}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid='transparent'
              />
            </View>

            <View style={styles.inputContainerPass}>
              <IconMaterial name={'gmail'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
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
              <IconMaterial name={'lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
              <TextInput style={styles.input}
                  placeholder={'Password'}
                  defaultValue = {this.state.password}
                  onChangeText = {text => this.setState({password: text})}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid='transparent'
              />
            </View>
       
            <TouchableOpacity style={styles.btnLogin} 
                  onPress={() => {
                  this.checkRegister()
                }}>
                <Text style={styles.textBtnLogin}>REGISTER</Text>
            </TouchableOpacity>

            <Modal  isVisible={this.state.isModalVisible1}  
                    onSwipeComplete={this._toggleModal1}
                    onBackdropPress={this._toggleModal1}
                    swipeDirection="down" 
                    backdropColor = "transparent"
                    animationInTiming={2000}
                    animationOutTiming={0}
                    backdropTransitionOutTiming={0}>                  
              <View style ={styles.modalStyle}>              
                {/* <IconMaterial name={'close'} size={27} color={'white'} style={styles.closeButton} 
                  />  */}
                <Text adjustsFontSizeToFit={true} 
                      // numberOfLines={2}
                      style ={styles.modalText}
                      onPress={() => {
                        this._toggleModal1()}}
                > 
                      {this.state.registerText} 
                </Text>
              </View>
            </Modal>

            <Modal
                // onModalHide ={this.backtoLogin}
                isVisible={this.state.isModalVisible2}
                backdropColor={"black"}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={1000}>

              <TouchableOpacity style={styles.modalStyle2}
                  onPress={() => {
                    this._toggleModal2(),
                    this.backtoLogin()
                }}  >
                <Text style = {styles.modalText }                >
                  Your registration has been successfully completed!
                </Text>

                <Text style ={{color: 'black', fontSize: 16}}>
                  Please login!
                </Text>
              </TouchableOpacity>
            </Modal>
      </KeyboardAvoidingView>
     
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp('8%'),
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
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
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
      backgroundColor: 'rgba(69, 8, 135, 1)',
      justifyContent: 'center',
      marginTop: hp('3%'),
      paddingHorizontal: wp('32%'),
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      elevation: 2, // Android
      // marginBottom: 50,
    },
    textBtnLogin: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: hp('2.5%'),
      textAlign: 'center'
    },
    modalStyle:{
      backgroundColor: 'gray',
      opacity: 0.5,
      alignItems: 'center',
      bottom: hp('5%'),
      borderColor:'white',
      borderWidth:1,
      // paddingVertical: hp('5%'),
      // paddingHorizontal: wp('70%'),
      position: 'absolute',
      width: wp('90%'),
      height: hp('13%'),
      // paddingHorizontal: 15,
    
    },  
    modalStyle2:{
      paddingVertical: wp('5%'),
      paddingHorizontal: wp('5%'),
      backgroundColor: 'white',
      borderColor:'black',
      justifyContent: 'center',
      alignItems: 'center'
    },  
    modalText:{
      fontWeight: 'bold',
      fontSize: 19, 
      color: 'black',
      textAlign: 'center',
      textAlignVertical: "center",
      padding: hp('3%'),
    },
    // closeButton:{
    //   position: 'absolute',
    //   bottom: wp('18'),
    //   left: wp('83'),
    // }
  });

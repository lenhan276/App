import React, { Component } from 'react'
import { Image, StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, YellowBox } from 'react-native'
import NavigationService from '../../components/NavigationService';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import IconMenu from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLogOut from 'react-native-vector-icons/AntDesign'
import BackGroundImg from './Images/LightGreen_BG.jpg'
import logo from './Images/homiteclogo.png'

export default class ContentDrawer extends Component {
    render() {
        
      return (
        <ImageBackground source = {BackGroundImg} style={styles.sideMenuContainer}>
 
        <Image source={logo}  style={styles.sideMenuProfileIcon} />
 
        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: hp('3%'), marginBottom: hp('2%')}} />
 
        <View style={{width: '100%'}}>

        <TouchableOpacity style={styles.itemBox} onPress={() => { NavigationService.navigate('homeSideMenu') }}>
    
              <IconMenu name ={'home'}  style={styles.sideMenuIcon} />
              
              <Text style={styles.menuText} 
                // onPress={() => { NavigationService.navigate('homeSideMenu') }} 
              > Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBox} onPress={() => { NavigationService.navigate('dataScreen') }}>
 
              <IconMenu name ={'settings-outline'}  style={styles.sideMenuIcon} />
              
              <Text style={styles.menuText} 
              > Data </Text>
 
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.itemBox} onPress={() => { NavigationService.navigate('settingScreen') }}>
 
              <IconMenu name ={'account-settings'}  style={styles.sideMenuIcon} />    
 
              <Text style={styles.menuText} 
              > Setting </Text>
 
        </TouchableOpacity>
        
        {/* <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: hp('4%'),}} /> */}

        <View style = {styles.logOutBox}>
          <TouchableOpacity style={styles.itemBox} onPress={() => { NavigationService.navigate('mainScreen') }}>
  
          <IconLogOut name ={'logout'}  style={styles.sideMenuIcon} />    

          <Text style={styles.menuText} 
          > LogOut </Text>
          </TouchableOpacity>
        </View>
 
 
 
        </View>
 
      
 
 
      </ImageBackground>
    );
  }
}


  const styles = StyleSheet.create({
   
    sideMenuContainer: {
      width: '100%',
      height: '100%',
      alignItems: 'center',  
    },
   
    sideMenuProfileIcon:{
      resizeMode: 'center',
      width: wp('70%'),
      height: hp('17%'),
      borderRadius: 150/2,
      marginTop: hp('4%'),
    },

    itemBox:{ 
      marginLeft: wp('5%') ,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: hp('2%')
    },

    sideMenuIcon:{ 
      fontSize : 25,
      color: 'white' 
    },
   
    menuText:{
      marginLeft: 5,
      fontSize: 22,
      color: 'white',
    },

    logOutBox:{
      marginTop: hp('38%'),
      left: wp('35%')
      
    }
   
  });
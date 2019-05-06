import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native'
import background from './Images/blue_background.png'
import { Container, Header, Content, Left } from 'native-base'
import IconMenu from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SideLogin1 extends Component {
  render() {
      
    return (
      <Container>
        <ImageBackground source = {background} style = {styles.backgroundContainer}>
          <Header 
                  iosBarStyle={"light-content"}
                  androidStatusBarColor="rgba(0,0,0,0.251)"
                  transparent
                  shadowOpacity = {0} // remove shadow on iOS
                  noShadow>
                <Left>
                  <IconMenu name = {'menu'} size ={28} style = {{right: wp('27%'), color:'white',marginBottom: hp('4%')}} onPress={() => 
                  this.props.navigation.openDrawer()} />
                </Left>
              </Header>
            <View style={styles.container}>
                <Text style = {{color: 'white', fontSize: 20}}>
                  Setting
                </Text> 
            </View>
        </ImageBackground>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
})
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native'
import background from './Images/blue_background.png'
import { Container, Header, Content, Left, Icon, Body, Right, Title  } from 'native-base'
import IconMenu from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SideLogin1 extends Component {
  render() {
      
    return (
      <Container>
        <ImageBackground source = {background} style = {styles.backgroundContainer}>
        <Header iosBarStyle={"light-content"}
                    androidStatusBarColor="rgba(0,0,0,0.251)"
                    transparent
                    shadowOpacity = {0} // remove shadow on iOS
                    noShadow>
                  <Left style={{
                      flex:1
                      }}>                 
                      <IconMenu name = {'menu'} size ={hp('4.3%')} style ={{color : 'white', left: hp('1%')}} onPress={() => 
                      this.props.navigation.openDrawer()} />
                  </Left>
                  <Body style ={{flex: 1}}>
                  <Title style = {styles.title}>
                   SETTING
                   </Title>
                  </Body>
                  <Right style ={{flex:1}}></Right>
          </Header>
              <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2',}} />
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
    title: {
      color: 'white',
      fontSize: hp('2.8%'),
      
    }
})
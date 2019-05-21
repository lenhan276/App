import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'
import background from './Images/blue_background.png'
import { Container, Header, Content, Left, Icon, Body, Right, Title   } from 'native-base'
import IconMenu from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FormConfig from '../../components/formLoginPath/FormConfig'

export default class SideLogin1 extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isVisible: false,
  //     index: 0,
  //     color: 'white',
  //     size: 100,
  //     types: ['FadingCircleAlt']
  //   }
  // }
  

  render() {
    return (
      <Container>
        <ImageBackground source = {background} style = {styles.backgroundContainer} >
          <Header   iosBarStyle={"light-content"}
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
                  <Body style ={{flex: 1,justifyContent:'center'}}>
                    <Title style = {styles.title}>
                      CONFIG
                    </Title> 
                  </Body>
                <Right style ={{flex:1}}></Right>
            
          </Header>
            <View style={styles.container}>            
                <FormConfig/>                           
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
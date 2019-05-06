import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, ImageBackground, } from 'react-native'
import background from '../components/images/blue_background.png'
import NavigationService from '../components/NavigationService';
import FormHome from '../components/formLoginPath/FormHome'
import { Container, Header, Content, Left } from 'native-base'
import IconMenu from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Home extends Component {
    render() {
        return (
        
          <Container>
          <ImageBackground source = {background} style={styles.backgroundContainer} >
            <Header 
                    iosBarStyle={"light-content"}
                    androidStatusBarColor="rgba(0,0,0,0.251)"
                    transparent
                    shadowOpacity = {0} // remove shadow on iOS
                    noShadow>
              <Left>
                <IconMenu name = {'menu'} size ={28} style = {{right: wp('27%'), color:'white', marginBottom: hp('4%')}} onPress={() => 
                this.props.navigation.openDrawer()} />
              </Left>
            </Header>
            
                  <FormHome/> 

              </ImageBackground> 
          </Container>
       
        );
    }
}

export default Home;

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
  })
import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, } from 'react-native'
import background from '../components/images/blue_background.png'
import NavigationService from '../components/NavigationService';
import FormHome from '../components/formLoginPath/FormHome'
import { Container, Header, Content, Left, Title, Button, Icon, Body, Right } from 'native-base'
import IconMenu from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StatusBarColor from '.././components/StatusBar/StatusBarColor'

class Home extends Component {
    render() {
        return (
          <Container>
            <ImageBackground source = {background} style={styles.backgroundContainer} >
            <Header iosBarStyle={"light-content"}
                    androidStatusBarColor="rgba(0,0,0,0.251)"
                    transparent                  
                   >
                  <Left style={{
                      flex:1
                      }}>                 
                      <IconMenu name = {'menu'} size ={hp('4.3%')} style ={{color : 'white', left: hp('1%')}} onPress={() => 
                      this.props.navigation.openDrawer()} />
                  </Left>
                  <Body style ={{flex: 1,justifyContent:'center'}}>
                  <Title style = {styles.title}>
                   HOME
                   </Title> 
                  </Body>
                  <Right style ={{flex:1}}></Right>       
              </Header>
              <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2',}} />
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
    title: {
      color: 'white',
      fontSize: hp('2.8%'),
      
    }
  })
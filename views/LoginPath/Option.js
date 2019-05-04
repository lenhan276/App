import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native'
import background from '../components/images/blue_background.png'
import NavigationService from '../components/NavigationService';
import FormOptions from '../components/formLoginPath/FormOptions'
import { Container, Header, Content, Left } from 'native-base'

class Home extends Component {
    render() {
        return (
          <Container>
            <ImageBackground source = {background} style = {styles.backgroundContainer} >
              <Header style={{ backgroundColor: null }} noShadow>
                {/* <Left>
                  <IconMenu name = {'menu'} size ={28} style = {{right: 110}} onPress={() => 
                  this.props.navigation.openDrawer()} />
                </Left> */}
              </Header>

                <FormOptions/>

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
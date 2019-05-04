import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import background from '../components/images/blue_background.png'
import Logo from '../components/Logo';


export default class SideRegister1 extends Component {
  render() {
      
    return (
      <View style={styles.container}>
          <Text Style = {{color: 'red', fontSize: 30}}>
            Side page after press register!
          </Text>
          <Logo/>
      </View>
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
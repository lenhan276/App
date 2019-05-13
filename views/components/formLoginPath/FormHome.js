import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground} from 'react-native'
import NavigationService from '../NavigationService';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Smartconfig from 'react-native-smartconfig-ll';
import { TouchableOpacity } from 'react-native-gesture-handler';



// var mqtt = require('mqtt')
// var client  = mqtt.connect({
// host: 'mqtt://http://61.14.237.248:3001',
// port: 1883,
// username: 'iot_tptechs',
// password: 'Tptechs@1234'
// })

// var mqtt = require('mqtt');
// var client = mqtt.connect('mqtt://61.14.237.248:3000:1889', {username: 'iot_tptechs', password: 'Tptechs@1234'});

class FormHome extends Component {
 
    TestConfig = () =>{

        Smartconfig.start({
            type: 'esptouch', //or airkiss, now doesn't not effect
            ssid: 'TPTECHS',
            bssid: "", //"" if not need to filter (don't use null)
            password: 'Tptechs@1234',
            timeout: 50000 //now doesn't not effect
        }).then(function(results){
            //Array of device success do smartconfig
            alert(JSON.stringify(results))
            /*[
            {
                'bssid': 'device-bssi1', //device bssid
                'ipv4': '192.168.1.11' //local ip address
            },
            {
                'bssid': 'device-bssi2', //device bssid
                'ipv4': '192.168.1.12' //local ip address
            },
            ...
            ]*/
        }).catch(function(error) {
        
        });
    }
    // componentWillMount() {
    //     client.on('connect', function () {
    //       client.subscribe('presence', function (err) {
    //         if (!err) {
    //           client.publish('presence', "Hello mqtt")
    //         }
    //       })
    //     })
    //   }
    render() {
        return (
            <View style ={styles.container}>
                <Text style = {{color: 'white', fontSize: 20}}>
                    This is main Home
                </Text>
                <Button title = "Config"
                    onPress={() => {
                    this.TestConfig()}}>

                </Button>
            </View>
        );
    }
}

export default FormHome;

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
import React, { Component } from 'react'
import Setting from './LoginPath/SideMenu/Setting'
import Config from './LoginPath/SideMenu/Config'

export default {
    settingScreen:{
        screen: Setting,
        navigationOptions : {
            headerTintColor: '#fff',
        }
    },
    dataScreen:{
        screen: Config,
        navigationOptions : {
            headerTintColor: '#fff',
        }
    }
}
import React, { Component } from 'react'
import Setting from './LoginPath/SideMenu/Setting'
import Data from './LoginPath/SideMenu/Data'

export default {
    settingScreen:{
        screen: Setting,
        navigationOptions : {
            headerTintColor: '#fff',
        }
    },
    dataScreen:{
        screen: Data,
        navigationOptions : {
            headerTintColor: '#fff',
        }
    }
}
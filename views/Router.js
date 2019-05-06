import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, ImageBackground, Dimensions, } from 'react-native'
import { createStackNavigator, createAppContainer ,createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems,} from 'react-navigation';
import { fromLeft,fromRight,flipY,flipX,fromBottom,fromTop,fadeIn,zoomIn,zoomOut } from 'react-navigation-transitions';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SideRegister1 from './RegisterPath/SideRegister1'
import Option from './LoginPath/Option'
import Home from './LoginPath/Home'
import MainScreen from './MainScreen'
import LogAfterReg from './LoginPath/LogAfterReg'
import MappingDrawer from './MappingDrawer'
import CustomSideMenu from './LoginPath/SideMenu/CustomSideMenu'
import IconFontAw from 'react-native-vector-icons/FontAwesome'
import IconFoundation from 'react-native-vector-icons/Foundation'




const HomeProfileTab = createMaterialBottomTabNavigator({
    homeTabScreen: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
               <IconFontAw name="home" size={26} color={tintColor} />
               )
        }
    },
    optionScreen: {
        screen: Option,
        navigationOptions: {
            tabBarLabel: 'Options',
            tabBarIcon: ({tintColor}) => (
               <IconFoundation name="page-multiple" size={26} color={tintColor} />
               )
        }
    },
},
    { 
       initialRouteName: 'homeTabScreen', 
       order: ['homeTabScreen','optionScreen'],
       activeTintColor: 'black',
       barStyle: { backgroundColor: '#F0F8FF', borderTopWidth:0.5, borderTopColor: '#fb9800', opacity: 100 },
       labelStyle: { fontSize: 10 },
       showIcon: true,
       showLabel: true,
       shifting: true,
    },
);

const TabStack = createStackNavigator({
    Tab: {
        screen: HomeProfileTab
    },
},
    {
        headerMode: 'none',
    initialRouteName: 'Tab'
    }
);

const SideMenuDraw = createDrawerNavigator({
    homeSideMenu :{
         screen: TabStack,
         navigationOptions : {
            headerTintColor: '#fff',
         }
     },
     ...MappingDrawer,
 },
     {    
         initialRouteName: 'homeSideMenu',
         contentComponent: CustomSideMenu,
         drawerWidth: Dimensions.get('window').width - 100,
 },
 );
 
const LoginStack = createStackNavigator({
    loginHome: { 
        screen: SideMenuDraw
    },
},  
      { 
        headerMode: 'none',
        initialRouteName: 'loginHome',
    },
);

const mainStack = createSwitchNavigator({
    mainScreen:{
        screen: MainScreen
    },
    loginScreen: {
        screen: LoginStack
    },
    logAfterScreen: {
        screen: LogAfterReg
    }
},
    {   
        headerMode: 'none',
        initialRouteName: 'mainScreen',
        transitionConfig: () => fromLeft(1000),
        }    
);


const MyApp = createAppContainer(mainStack);
export default MyApp;
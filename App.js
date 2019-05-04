import React, {Component} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import NavigationService from './views/components/NavigationService';
import { TouchableOpacity, Platform, View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import background from './views/components/images/blue_background.png'
import MyApp from './views/Router'
import Logo from './views/components/Logo'
import StatusBarColor from './views/components/StatusBar/StatusBarColor'

export default class App extends Component {
  render() {
    return (

        <PaperProvider >
          <StatusBarColor backgroundColor="#772ea2"
             barStyle="light-content"/>
            <MyApp ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }} />

        </PaperProvider>
    );
  }
}

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

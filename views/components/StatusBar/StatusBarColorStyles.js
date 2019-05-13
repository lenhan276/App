import { StyleSheet, Platform, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default StyleSheet.create({
statusBar: {
height: STATUSBAR_HEIGHT
}
}
);
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// You can import from local files
import Hotels from './components/Hotels';
import Rooms from './components/Rooms';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

 class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});
const AppNavigator = createStackNavigator({
  Menu: {
    screen: Hotels,
  },
  Rooms: {
    screen: Rooms,
  },
  Hotels: {
    screen: Hotels,
  }
});
export default createAppContainer(AppNavigator);
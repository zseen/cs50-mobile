import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./searchScreen";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";


export default class App extends React.Component {
  state = {
    
  };

  render() {
    return (
      <Search/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

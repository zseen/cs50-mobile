import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Search from "./searchBar";

import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";



export default class App extends React.Component {
  state = {
    search : Search
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

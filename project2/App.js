import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

const AppNavigator = createSwitchNavigator({
  Movies: MoviesScreen,
  Search: SearchScreen
});




export default class App extends React.Component {


  
  render() {

      return (
     
      pass
        
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

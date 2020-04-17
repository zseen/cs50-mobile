import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchComponent from './searchScreen.js'
import MovieComponent from './MovieScreen.js'

const AppNavigator = createStackNavigator({
  "MainRoute": SearchComponent,
  "MovieRoute": MovieComponent,
});


const App = createAppContainer(AppNavigator);

export default App;






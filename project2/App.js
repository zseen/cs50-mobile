import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movies from "./Movies"
import { SearchBar } from 'react-native-elements';

import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";




class App extends  React.Component {

    state = {
      search: '',
    };
  
    updateSearch = search => {
      this.setState({ search });
    };
  


    showSearchBar 
    render() {
      const { search } = this.state;

  
      return (
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
      );
    }
  }
  
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

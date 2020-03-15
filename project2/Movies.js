import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    state = {
      moviesList: [],
    };
  
  
    showMoviesList = () => {
      return (
        <View>
          //moviesList
        </View>
      );
    }
  
    
    render() {
      const { search } = this.state;
        return (
          this.showSearchBar(search)
          
        );
    }
  }
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    state = {
      moviesList: [],
    };
  
    updateSearch = search => {
      this.setState({ search });
    };
  
    showMoviesList = () => {
      return (
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
      );
    }
  
    
    render() {
      const { search } = this.state;
        return (
          this.showSearchBar(search)
          
        );
    }
  }
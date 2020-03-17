import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types'

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
    };

  const ScrollViewMovies = () => (
      <ScrollView>
        {this.moviesList}
      </ScrollView>
    )
  

    this.ScrollViewMovies.propTypes = {
      moviesList: PropTypes.array,
    };
    
    export default ScrollViewMovies;
    
   
    
  }




 




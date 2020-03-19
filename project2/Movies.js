import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types'

export default class MovieScreen extends React.Component {
  state = {
    moviedetails: []
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.getParam('Title'),
    } 
  }
  
  
  showMoviesList = () => {
      return (
        <View>
          //moviesList
        </View>
      );
    };

  ScrollViewMovies = () => (
      <ScrollView>
        {this.moviesList}
      </ScrollView>
    )
  

 
    
  
    
   
    
  }




 




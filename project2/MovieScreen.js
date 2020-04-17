import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';

import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
import { fetchById } from "./Api";


export default class MovieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: null
    };
  }

  
  componentDidMount() {
    this.getMoviesById(this.props.navigation.getParam("id", "n/a"));
  }
  
  getMoviesById = async id => {
    const results = await fetchById(id);
    this.setState({ movieInfo: results });
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          
          onPress={() => {
            this.props.navigation.navigate("MainRoute");
          }}
        >
          <Text style={styles.touchableText}>Go Back</Text>
        </TouchableOpacity>
        {this.state.movieInfo && this.state.movieInfo.Poster ? (
          <Image
            resizeMode="cover"
            source={{ uri: this.state.movieInfo.Poster }}
            style={styles.image}
          />
        ) : null}
        {this.state.movieInfo && (
          <View>
            <Text style={styles.title}>{this.state.movieInfo.Title}</Text>
            <Text>Year: {this.state.movieInfo.Released}</Text>
            <Text>Genre: {this.state.movieInfo.Genre}</Text>
            <Text>Rated: {this.state.movieInfo.Rated}</Text>
            <Text>{this.state.movieInfo.Director}</Text>
            <Text>--------------------</Text>
            <Text>{this.state.movieInfo.Actors}</Text>
            <Text>--------------------</Text>
            <Text style={styles.plot}>{this.state.movieInfo.Plot}</Text>
          </View>
        )}
      </View>
    );
  }
}


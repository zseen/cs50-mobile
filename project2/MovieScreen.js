import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";

import {getMoviesById} from "./Api"

const API_KEY = 'a80984c'



export default class MovieInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: null
    };
  }

  
  componentDidMount() {
    
    
    this.mov(),
    console.log(this.movieInfo)
     
  };



  mov() {
    v = getMoviesById(this.props.navigation.getParam("id", "n/a")),

    this.setState({
      movieInfo: v
    })
    
  };
  
  
  
  





 

  
    
    
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Find a movie");
          }}
        >
          <Text>Go Back</Text>
        </TouchableOpacity>
        {this.state.movieInfo && this.state.movieInfo.Poster ? (
          console.log("picture found"),
          <Image
            resizeMode="cover"
            source={{ uri: this.state.movieInfo.Poster }}
            style={styles.image}
          />
        ) : null}
        {this.state.movieInfo && (
          <View>
            <Text>{this.state.movieInfo.Title}</Text>
            <Text>Release date: {this.state.movieInfo.Released}</Text>
            <Text>Genre: {this.state.movieInfo.Genre}</Text>
            <Text>Rated: {this.state.movieInfo.Rated}</Text>
            <Text>Director: {this.state.movieInfo.Director}</Text>
            <Text>Actors: {this.state.movieInfo.Actors}</Text>
            <Text>Plot: {this.state.movieInfo.Plot}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 25,
    borderColor: "orange",
    padding: 5
  },
  image: {
    width: 300,
    height: 300,
    borderColor: "orange",
    borderWidth: 5,
    marginBottom: 50
  }})
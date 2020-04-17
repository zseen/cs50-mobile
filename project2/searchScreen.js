import React from "react";
import {
  TouchableHighlight,
  FlatList,
  View,
  TextInput,
  Text,
  StyleSheet
} from "react-native";
import { fetchMovies } from "./Api";

const API_KEY = 'a80984c'

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      movies: []
    };
  }
 
  componentDidUpdate(prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.getMoviesBySearchQuery(this.state.searchQuery);
    }
  }


  getMoviesBySearchQuery = async searchQuery => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`)
    .then(response => response.json())
    .then((responseJson) => {
      
      this.setState({
        movies: responseJson.Search
        })
    })
    .catch(error=>console.log(error)) 
    }


  renderMovieTitle = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor="white"
        onPress={() => {
          this.props.navigation.navigate("MovieRoute", {
            title: item.title,
            id: item.imdbID,
          });
        }}
      >
        <View>
          <Text>{item.Title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <View >
        <View >
          <TextInput
            placeholder="enter item to search for.."
            value={this.state.searchQuery}
            onChangeText={searchQuery => this.setState({ searchQuery })}
          />
        </View>
        <FlatList
          data={this.state.movies}
          renderItem={this.renderMovieTitle}
          keyExtractor={item => item.Title + item.imdbID}
        />
      </View>
    
    );
  }
}

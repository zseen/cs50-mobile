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
        underlayColor="#b879d2"
        onPress={() => {
          this.props.navigation.navigate("Info", {
            title: item.Title,
            id: item.imdbID,
          });
        }}
      >
        <View>
      <Text style={[styles.boldBlackFont, styles.smallUpperPadding]}>{item.Title} ({item.Year})</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.purpleBorder}>
          <TextInput
            placeholder="Movie title"
            value={this.state.searchQuery}
            onChangeText={searchQuery => this.setState({ searchQuery })}
            style={styles.purpleSmallBox}
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#eed5f8",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 30,
    borderColor: "#b879d2"
  },
  purpleBorder: {
    backgroundColor: "#eed5f8",
    borderColor: "#b879d2",
    borderWidth: 4,
    borderRadius: 10,
    marginTop: 80,
    marginBottom: 50
  },
  purpleSmallBox: {
    backgroundColor: "#eed5f8",
    borderColor: "#b879d2",
    borderWidth: 3,
    width: 220,
    padding: 30,
    fontSize: 20
  },
  smallUpperPadding: {
    marginTop: 10,
  },
  boldBlackFont: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black"
  }
})
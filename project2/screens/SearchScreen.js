import React from "react";
import {
  TouchableHighlight,
  FlatList,
  View,
  TextInput,
  Text,
  StyleSheet
} from "react-native";


import { findMoviesByQuery } from "../API/Api";


export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      movies: []
    };
  };

getMoviesBySearchQuery = async(searchQuery) => {
  const movies = await findMoviesByQuery(searchQuery)
  this.setState({ searchQuery: searchQuery,
    movies: movies })
};

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
        <Text style={[styles.boldBlackFont, styles.smallUpperMargin]}>{item.Title} ({item.Year})</Text>
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
          onChangeText={this.getMoviesBySearchQuery}
          style={styles.purpleSmallBox}
        />
      </View>
      <FlatList
        data={this.state.movies}
        renderItem={this.renderMovieTitle}
        keyExtractor={item => item.Title + item.imdbID}
        style={styles.smallSidePadding}
      />
    </View>
  );
};
};


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
  smallUpperMargin: {
    marginTop: 10,
  },
  smallSidePadding: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  boldBlackFont: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black"
  }
})
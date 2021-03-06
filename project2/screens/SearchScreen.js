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
import { lightPurple, darkPurple } from "../style/Colors"


export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      movies: []
    };
  };

  getMoviesBySearchQuery = async (searchQuery) => {
    this.setState({ searchQuery: searchQuery })
    if (searchQuery.length >= 3) {
      const movies = await findMoviesByQuery(searchQuery)
      this.setState({ movies: movies })
    }
  };

  renderMovieTitle = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor={darkPurple}
        onPress={() => {
          this.props.navigation.navigate("Details", {
            id: item.imdbID
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
          keyExtractor={item => item.imdbID}
          style={styles.smallSidePadding}
        />
      </View>
    );
  };
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: lightPurple,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 30,
    borderColor: darkPurple
  },
  purpleBorder: {
    backgroundColor: lightPurple,
    borderColor: darkPurple,
    borderWidth: 4,
    borderRadius: 10,
    marginTop: 80,
    marginBottom: 50
  },
  purpleSmallBox: {
    backgroundColor: lightPurple,
    borderColor: darkPurple,
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
import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";

import { getMovieInfoById } from "../API/Api"
import { lightPurple, darkPurple } from "../style/Colors"


export default class MovieDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: null
    };
  };

  getMovieInfo = async id => {
    const movieInfo = await getMovieInfoById(id);
    this.setState({ movieInfo: movieInfo });
  };

  componentDidMount() {
    this.getMovieInfo(this.props.navigation.getParam("id"));
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={styles.touchOpacity}
            onPress={() => {
              this.props.navigation.navigate("Find a movie");
            }}
          >
            <Text style={[styles.smallerBlackFont, styles.bigBottomMargin]}>Go Back</Text>
          </TouchableOpacity>

          {this.state.movieInfo ? (
            <>
              <Image
                resizeMode="cover"
                source={{ uri: this.state.movieInfo.Poster }}
                style={styles.image}
              />

              <View style={styles.smallSidePadding}>
                <Text style={styles.boldBlackFont}>{this.state.movieInfo.Title}</Text>
                <Text style={[styles.smallerBlackFont, styles.smallUpperMargin]}>Release date: {this.state.movieInfo.Released}</Text>
                <Text style={[styles.smallerBlackFont, styles.smallUpperMargin]}>Genre: {this.state.movieInfo.Genre}</Text>
                <Text style={[styles.smallerBlackFont, styles.smallUpperMargin]}>Rated: {this.state.movieInfo.Rated}</Text>
                <Text style={[styles.smallerBlackFont, styles.smallUpperMargin]}>Director: {this.state.movieInfo.Director}</Text>
                <Text style={[styles.smallerBlackFont, styles.smallUpperMargin]}>Actors: {this.state.movieInfo.Actors}</Text>
                <Text style={[styles.smallerBlackFont, styles.smallUpperMargin]}>Plot: {this.state.movieInfo.Plot}</Text>
              </View>
            </>
          ) : null}
        </View>
      </ScrollView>
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
  smallUpperMargin: {
    marginTop: 10,
  },
  boldBlackFont: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black"
  },
  smallerBlackFont: {
    fontSize: 18
  },
  bigBottomMargin: {
    marginBottom: 30
  },
  touchOpacity: {
    backgroundColor: darkPurple,
    borderRadius: 10,
    padding: 15,
    marginBottom: 40
  },
  smallSidePadding: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  image: {
    width: 300,
    height: 300,
    borderColor: darkPurple,
    borderWidth: 7,
    marginBottom: 60
  }
})
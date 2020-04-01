import { SearchBar } from 'react-native-elements';
import React from 'react';

const KEY = 'a80984c'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      loading: true,
      results: []
    }
  };

  updateSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  getSearchResults = (searchQuery) => {
    this.showSearchBar(searchQuery)
    
    if(this.state.searchQuery.length < 3) {
      this.setState({
        results: []
      })
    }

      fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${this.state.searchQuery}`)
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
          loading: false,
          results: responseJson
        })
      })
      .catch(error=>console.log(error)) 
        
  }

  showSearchBar = searchQuery => {
    return (
      <SearchBar
        placeholder="Type here..."
        onChangeText={this.updateSearch}
        value={searchQuery}
      />
    )
  };

  render() {
    const { searchQuery } = this.state;
   
    return (
      this.getSearchResults(searchQuery),
      this.results
     
    );
  }
}


export default Search;
import { SearchBar } from 'react-native-elements';
import React from 'react';

class Search extends React.Component {
  state = {
    searchQuery: '',
    results: {}
  };

  updateSearch = searchQuery => {
    this.setState({ searchQuery });
  };

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
      this.showSearchBar(searchQuery)
    );
  }
}


export default Search;
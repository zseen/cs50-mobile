import { SearchBar } from 'react-native-elements';
import React from 'react';

class Search extends  React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };


  showSearchBar = search => {
    return(
      <SearchBar
      placeholder="Type here..."
      onChangeText={this.updateSearch}
      value={search}
      />
    )
  };

  render() {
    const { search } = this.state;

    return (
      this.showSearchBar(search)
    );
  }
}


export default Search;
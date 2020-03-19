import { SearchBar } from 'react-native-elements';
import React from 'react';

class Search extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
      results: {},
      loading: false,
      message: '',
		};
  }
  
  handleOnInputChange = (event) => {
    const query = event.target.value;
              this.setState({ query, loading: true, message: ''  } );
  };



  showSearchBar = () => {
    <SearchBar
    placeholder="Type Here..."
    onChangeText={this.handleOnInputChange}
    value={query}
    />
  }

  render() {
    return (
    
      this.showSearchBar
    );
  };


}
export default Search;
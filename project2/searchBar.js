import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
    state = {
      search: '',
    };
  
    updateSearch = search => {
      this.setState({ search });
    };
  
    showSearchBar = search => {
      return (
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
      );
    }
  
    
    render() {
      const { search } = this.state;
        return (
          this.showSearchBar(search)
          
        );
    }
  }
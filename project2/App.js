import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SearchComponent from './screens/SearchScreen.js'
import MovieInfoComponent from './screens/MovieDetailsScreen.js'


const AppNavigator = createStackNavigator({
  "Find a movie": SearchComponent,
  "Details": MovieInfoComponent,
});

const App = createAppContainer(AppNavigator);

export default App;
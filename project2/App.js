import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SearchComponent from './screens/SearchScreen.js'
import MovieDetailsComponent from './screens/MovieDetailsScreen.js'


const AppNavigator = createStackNavigator({
  "Find a movie": SearchComponent,
  "Details": MovieDetailsComponent,
});

const App = createAppContainer(AppNavigator);

export default App;
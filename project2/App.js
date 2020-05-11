import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SearchComponent from './screens/SearchScreen.js'
import MovieInfoComponent from './screens/MovieScreen.js'



const AppNavigator = createStackNavigator({
  "Find a movie": SearchComponent,
  "Info": MovieInfoComponent,
});


const App = createAppContainer(AppNavigator);

export default App;



import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SearchComponent from './searchScreen.js'
import MovieInfoComponent from './MovieScreen.js'



const AppNavigator = createStackNavigator({
  "Find a movie": SearchComponent,
  "Info": MovieInfoComponent,
});


const App = createAppContainer(AppNavigator);

export default App;



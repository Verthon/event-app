import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './components/Home'
import Events from './components/Events'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Events: { screen: Events }
})

const App = createAppContainer(AppNavigator)

export default App

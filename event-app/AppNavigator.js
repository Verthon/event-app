import { createStackNavigator } from 'react-navigation'
import Home from './components/Home'
import Events from './components/Events'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Events: { screen: Events }
})

export default AppNavigator

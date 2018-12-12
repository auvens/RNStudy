import { createStackNavigator } from 'react-navigation'
import TabNavigator from './TabNavigator'
import CompView from '../pages/Component/View/View'

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index]
  
  let headerTitle
  if (routeName === 'Component') {
    headerTitle = '组件'
  } else if (routeName === 'API') {
    headerTitle = 'API'
  }

  return {
    headerTitle
  }
}

export default createStackNavigator({
  Tab: TabNavigator,
  View: CompView
})

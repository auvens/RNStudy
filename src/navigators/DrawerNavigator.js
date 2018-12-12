import { createDrawerNavigator } from 'react-navigation'
import ContentComponent from '../pages/DrawerScreen/ContentComponent/ContentComponent'
import StackNavigator from './StackNavigator'

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: StackNavigator
  },
  {
    contentComponent: ContentComponent
  }
)

export default MyDrawerNavigator

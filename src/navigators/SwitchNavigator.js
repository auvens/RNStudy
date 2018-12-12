import { createSwitchNavigator } from 'react-navigation'
import AuthLoadingScreen from '../pages/SwitchScreen/AuthLoading/AuthLoading'
import FirstUse from '../pages/SwitchScreen/FirstUse/FirstUse'
import AD from '../pages/SwitchScreen/AD/AD'
import AppStack from './DrawerNavigator'

export default createSwitchNavigator(
  {
    // 初始进来页面
    AuthLoading: AuthLoadingScreen,
    // 第一次使用 APP
    FirstUse: FirstUse,
    // 广告页
    AD: AD,
    // 主程序
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

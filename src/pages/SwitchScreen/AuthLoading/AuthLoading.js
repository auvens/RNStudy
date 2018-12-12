import React from 'react'
import { Text, View, AsyncStorage } from 'react-native'

export default class AuthLoading extends React.Component {
  constructor() {
    super()
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const firstUse = await AsyncStorage.getItem('firstUse')

    console.log('执行这里')
    this.props.navigation.navigate('App')
    return

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    setTimeout(() => {
      this.props.navigation.navigate(firstUse ? 'FirstUse' : 'AD')
    }, 3000)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>程序初始进来的页面</Text>
      </View>
    )
  }
}

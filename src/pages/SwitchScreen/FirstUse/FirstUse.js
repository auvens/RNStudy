import React from 'react'
import { Text, View, Button } from 'react-native'

export default class FirstUse extends React.Component {
  _signInAsync = async () => {
    await AsyncStorage.setItem('firstUse', 'abc')
    this.props.navigation.navigate('App')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>首次使用进入的页面</Text>
        <Button title="跳过 App 介绍" onPress={this._signInAsync} />
      </View>
    )
  }
}

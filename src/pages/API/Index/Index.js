import React from 'react'
import { Text, View } from 'react-native'

export default class APIIndex extends React.Component {
  static navigationOptions = {
    title: 'API'
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>react native 相关 API</Text>
      </View>
    )
  }
}

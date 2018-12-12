import React from 'react'
import { Text, View, Button } from 'react-native'

export default class CompIndex extends React.Component {
  static navigationOptions = {
    title: '组件'
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>react native 相关组件</Text>
        <Button
          title="跳转 View 组件"
          onPress={() => this.props.navigation.navigate('View')}
        />
      </View>
    )
  }
}

import React from 'react'
import { View, Text, Button } from 'react-native'

export default class CompView extends React.Component {
  static navigationOptions = {
    title: 'View 组件'
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>View 组件</Text>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="打开侧边栏"
        />
      </View>
    )
  }
}

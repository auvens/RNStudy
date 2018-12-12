import React from 'react'
import { Text, View, Button } from 'react-native'

export default class AD extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>广告页</Text>
        <Button
          title="跳过广告"
          onPress={() => this.props.navigation.navigate('App')}
        />
      </View>
    )
  }
}

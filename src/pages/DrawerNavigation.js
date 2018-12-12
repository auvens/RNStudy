import React from 'react'
import { Text, View, Image, Button, StyleSheet } from 'react-native'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/home.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="打开侧边栏"
        />
      </View>
    )
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/setting.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  }
})

export default createAppContainer(MyDrawerNavigator)

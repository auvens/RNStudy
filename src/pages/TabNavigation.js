import React from 'react'
import { Text, View, Image, Button } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    )
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
})

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen
})

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let source
        if (routeName === 'Home') {
          source = require('../images/home.png')
        } else if (routeName === 'Settings') {
          source = require('../images/setting.png')
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Image
            source={source}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        )
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
)

export default createAppContainer(TabNavigator)

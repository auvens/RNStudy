import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation'

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Text>自定义侧边栏</Text>
      {/* <DrawerItems {...props} /> */}
    </SafeAreaView>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CustomDrawerContentComponent

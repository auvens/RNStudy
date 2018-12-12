import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile-rn'
import CompBlock from '../../../Components/CompBlock'

const Item = List.Item
const Brief = Item.Brief

export default class CompIndex extends React.Component {
  static navigationOptions = {
    title: '组件'
  }

  render() {
    return (
      <View style={styles.main}>
        <CompBlock blockTitle="视图容器" list={[{ label: 'View 组件', android: true, ios: true, route: 'View' }]} />
        <WhiteSpace size="lg" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'rgb(245, 245, 245)'
  }
})

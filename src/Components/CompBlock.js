import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile-rn'
import { withNavigation } from 'react-navigation';

const Item = List.Item
const Brief = Item.Brief

class CompBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { blockTitle, list } = this.props
    return (
      <View>
        <WhiteSpace size="lg" />
        <WingBlank style={[styles.bgWhite, { borderRadius: 3, overflow: 'hidden' }]}>
          <List
            renderHeader={() => (
              <View>
                <WhiteSpace size="lg" />
                <WingBlank>
                  <Text style={styles.blockTitle}>{blockTitle}</Text>
                </WingBlank>
                <WhiteSpace size="lg" />
              </View>
            )}
          >
            {list.map(item => (
              <Item
                arrow="horizontal"
                extra={
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      {item.android ? <Image
                        style={{ width: 15, height: 15, marginLeft: 5 }}
                        source={require('../images/android.png')}
                        resizeMode="contain"
                      /> : null}
                      {item.ios ? <Image
                        style={{ width: 15, height: 15, marginLeft: 5 }}
                        source={require('../images/ios.png')}
                        resizeMode="contain"
                      /> : null}
                    </View>
                  </View>
                }
                onClick={() => this.props.navigation.navigate(item.route)}
              >
                {item.label}
              </Item>
            ))}
          </List>
        </WingBlank>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'rgb(245, 245, 245)'
  },
  bgWhite: {
    backgroundColor: '#fff'
  },
  blockTitle: {
    fontSize: 16,
    fontWeight: '600'
  }
})

export default withNavigation(CompBlock)
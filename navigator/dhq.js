import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from '../Common/Icon' // 自定义图标库
import TabBar from '../Common/TabBar' // tabBarComponent 自定义组件
// 页面
import Category from '../View/TabBar/Category/Category'
import Main from '../View/TabBar/Main/Main'
import My from '../View/TabBar/My/My'
import OrderList from '../View/TabBar/OrderList/OrderList'
import OnlineDoctor from '../View/TabBar/OnlineDoctor/OnlineDoctor'
export default createBottomTabNavigator(
  {
    // 首页:
    one: {
      screen: Main,
      navigationOptions: () => {
        return {
          tabBarIcon: ({ tintColor }) => {
            var soureImge
            if (tintColor == '#CBCBCB') {
              soureImge = 'main'
            } else {
              soureImge = 'mainActive'
            }
            return <Icon name={soureImge} size={26} color={tintColor} />
          }
        }
      }
    },
    //分类:
     two: {
      screen: Category,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          var soureImge
          if (tintColor == '#CBCBCB') {
            soureImge = 'Category'
          } else {
            soureImge = 'CategoryActive'
          }
          return <Icon name={soureImge} size={26} color={tintColor} />
        }
      }
    },
    //问诊:
    three: {
      screen: OnlineDoctor,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          var soureImge
          if (tintColor == '#CBCBCB') {
            soureImge = 'onLine'
          } else {
            soureImge = 'onLineActive'
          }
          return <Icon name={soureImge} size={48} color={tintColor} />
        }
      }
    },
    // 购物篮: 
    four: {
      screen: OrderList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          var soureImge
          if (tintColor == '#CBCBCB') {
            soureImge = 'OrderList'
          } else {
            soureImge = 'OrderListActive'
          }
          return <Icon name={soureImge} size={26} color={tintColor} />
        }
      }
    },
    //我的:
    five: {
      screen: My,
      navigationOptions: () => {
        return {
          tabBarIcon: ({ tintColor }) => {
            var soureImge
            if (tintColor == '#CBCBCB') {
              soureImge = 'My'
            } else {
              soureImge = 'MyActive'
            }
            return <Icon name={soureImge} size={26} color={tintColor} />
          }
        }
      }
    }
  },
  {
    initialRouteName: 'one', // 初始化页面
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#F34C56',
      inactiveTintColor: '#CBCBCB'
    }
  }
)
        

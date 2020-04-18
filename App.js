import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JMap from "./assets/components/JMap"
import Ionicons from 'react-native-vector-icons/Ionicons';
import SendPaperView from "./assets/components/infosendpaper"


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function MapScreen({ navigation }) {
  return (
    <JMap>
    </JMap>
  );
}

function SendPaperScreen({ navigation }) {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>订单： 13号厕所 *****</Text>
    // </View>
    <SendPaperView/>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={MapScreen} />
    </HomeStack.Navigator>
  );
}

//const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <Text>性别：*</Text>
  );
}

const SendPaperStack = createStackNavigator();

function SendPaperStackScreen() {
  return (
    <SendPaperStack.Navigator>
      <SendPaperStack.Screen name="Settings" component={SendPaperScreen} />
    </SendPaperStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === '个人中心') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === '接单送纸') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="接单送纸" component={SendPaperStackScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="个人中心" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
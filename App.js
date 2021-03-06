import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JMap from "./assets/components/JMap";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SendPaperView from "./assets/components/infosendpaper";
import SampleAppMovies from "./assets/components/jiedan";
function MapScreen({ navigation }) {
  return (
    <JMap>
    </JMap>
  );
}

function SendPaperScreen({ navigation }) {
  return (
    <SampleAppMovies />
  );
}


function PersonCenterScreen() {
  return (
    <SendPaperView />
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
            } else if (route.name === '请求送纸') {
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
        <Tab.Screen name="接单送纸" component={SendPaperScreen} />
        <Tab.Screen name="Home" component={MapScreen} />
        <Tab.Screen name="请求送纸" component={PersonCenterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
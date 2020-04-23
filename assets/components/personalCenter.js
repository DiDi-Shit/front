import { Button, ThemeProvider, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


class PersonCenter extends Component {

    constructor() {
        super();
        this.state = {
            sex: '男',
            name: 'jzy很菜',
            tel: '13344679792',
        }
    }

    render() {
        return (
            <ThemeProvider>
                <Text>昵称：{this.state.name}</Text>
                <Text>性别：{this.state.sex}</Text>
                <Text>联系方式：{this.state.tel}</Text>
            </ThemeProvider>
        );
    }

}


const Stack = createStackNavigator();

function PersonalCenterView() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={PersonCenter} />
        </Stack.Navigator>
    );
}

export default PersonalCenterView;
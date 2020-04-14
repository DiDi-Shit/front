import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions,
    Platform,
    Button
} from 'react-native'

import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'cyan' }}>
                <Text>
                    首页
                </Text>
                <Button title="到详情" onPress={() => this.props.navigation.navigate('Detail')}>

                </Button>
                <Button title="到详情 push" onPress={() => this.props.navigation.push('Detail')}>

                </Button>


            </View>
        );


    }
}

class DetailScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text>
                    详情页
                </Text>
                <Button title="首页" onPress={() => this.props.navigation.goBack()}></Button>

            </View>
        );

    }
}

// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: HomeScreen
//     }
// });

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class LKText extends Component {

    constructor(){
        super();
        this.state={
            name:"jiao",
            intro:'xihua'
        }
    }

    render() {
        const {name,intro}=this.state;
        return (
            <View style={styles.commeonStyle}>
                <Text style={styles.mainTitleStyle}>
                    {name}
                </Text>
                <Text>
                    {intro}
                </Text>
                <Text>

                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainTitleStyle:{
        fontSize:30,
        color:'cyan'
    },
    subTitleStyle:{
        fontSize:20,
    },
    commeonStyle:{
        fontWeight:'bold'
    }
});


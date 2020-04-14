import React, { Component } from 'react'

import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native'

export default class LKImage extends Component{
    constructor(){
        super();
    }

    render() {
      return (
          <View>
              <Image source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}} style={{width:200,height:200}}></Image>
          </View>
      )
    };
}
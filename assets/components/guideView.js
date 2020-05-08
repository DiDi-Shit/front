import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

let image1 = require('../img/11.jpg');
let image2 = require('../img/11.jpg');
let image3 = require('../img/11.jpg');
var {width, height} = Dimensions.get('window');

export default class extends Component {
  constructor() {
      super();
    };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        pagingEnabled={true}
        horizontal={true}>
        <Image source={image1} style={styles.backgroundImage} />
        <Image source={image2} style={styles.backgroundImage} />
        <Image source={image3} style={styles.backgroundImage} />
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
    contentContainer: {
      width:width*3,
      height:height,
    },
    backgroundImage: {
      width:width,
      height:height,
    },
});
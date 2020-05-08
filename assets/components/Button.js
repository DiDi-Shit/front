import React, {Component, PropTypes} from 'react';
import { Text, View, StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

export default class Button extends Component {
  render() {
    if (Platform.OS === 'android') {
      return(
        <TouchableNativeFeedback
          onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableNativeFeedback>
      );
    } else if (Platform.OS === 'ios') {
      return(
        <TouchableHighlight
          onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableHighlight>
      );
    }
  }

  _renderContent() {
    return(
      <View style={styles.content}>
          <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 13,
  },
  content: {
    height: 45,
    backgroundColor: '#046ada',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 30
  },
});
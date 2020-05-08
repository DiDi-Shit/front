import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, Image, PixelRatio, } from 'react-native';
import Button from '../component/Button';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.editGroup}>
<View style={styles.Estate}>
         <Image source={require('../img/bag.jpg')} style={styles.icon} />
          </View>
          <View style={styles.username}>
            <TextInput
              style={styles.edit}
              placeholder="用户名"
              placeholderTextColor="#c4c4c4"
              onChangeText={(text) => this.setState({text})}
              />
          </View>
          <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
            <View style={styles.password}>
              <TextInput
              style={styles.edit}
              placeholder="密码"
              placeholderTextColor="#c4c4c4"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Button text="登录" onPress={this._handleClick.bind(this)}/>
            </View>
        </View>
   <View style={styles.bottomStyle}>

            <Text>其他方式登录</Text>
            <Image source={require('../img/bag.jpg')} style={styles.image}/>
            <Image source={require('../img/bag.jpg')} style={styles.image}/>
            <Image source={require('../img/bag.jpg')} style={styles.image}/>

          </View>
      </View>
    );
  }

  _handleClick() {
    console.log('username:' + this.state.text);
    console.log('password:' + this.state.password);
  }

}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgb(152,245,255)',
  },
  editGroup: {
    margin: 20,

  },
Estate:{
alignItems : 'center',
paddingTop: 40,
  },
 image:{
    width:30,
    height:30,
    marginLeft:15,
    borderRadius:15,
  },
 bottomStyle:{

    flexDirection:'row',
    alignItems:'center',
    position:'absolute',
    bottom:20,
    // justifyContent:'flex-start',
    left:20
  },
icon:{

    width:60,
    height:60,
    borderRadius:30,
    marginBottom:30,
    borderRadius:50
  },
  username: {
    marginTop: 10,
    height: 48,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  password: {
    height: 48,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  edit:{
    height: 40,
    fontSize: 13,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
  },
});
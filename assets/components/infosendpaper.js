import { Button, ThemeProvider ,Input,Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class Infosendpaper extends Component{

    constructor(){
        super();
        this.state={
            textvalue: '',
            telphone:'***********',
        };
    }

    getValue(text){
        this.setState({
            textvalue: text
          })
    }

    getphone(text){
        this.setState({
            telphone: text
        })
    }

    render(){
        return(
            <ThemeProvider>
                <Input
                    label="备注"
                    placeholder='请输入详细信息'
                    onChangeText={text=>this.getValue(text)}
                />
                <Input
                    label='联系方式'
                    value={this.state.telphone}
                    onChangeText={text=>this.getphone(text)}
                />
                <Button 
                    titleStyle={styles.buttonStyle}
                    title="提交订单"
                    onPress={() => this.props.navigation.navigate('Waiting')}
                />
            </ThemeProvider>
        );
    }
}

class Modifyinfo extends Component{

    constructor(){
        super();
        this.state={
            textvalue: '',
            telphone:'***********',
        };
    }

    getValue(text){
        this.setState({
            textvalue: text
          })
    }

    getphone(text){
        this.setState({
            telphone: text
        })
    }

    render(){
        return(
            <ThemeProvider>
                <Input
                    label="备注"
                    placeholder='请输入详细信息'
                    onChangeText={text=>this.getValue(text)}
                />
                <Input
                    label='联系方式'
                    value={this.state.telphone}
                    onChangeText={text=>this.getphone(text)}
                />
                <Button 
                    titleStyle={styles.buttonStyle}
                    title="确定"
                    onPress={() => this.props.navigation.goBack()}
                />
            </ThemeProvider>
        );
    }
}

class Waiting extends Component{

    constructor(){
        super();
        this.state={
            id: '01',
            text: '备注',
            tel: '12345678911'
        };
    }

    render(){
        return(
            <ThemeProvider>
                <Text>正在等待……</Text>
                <Text>订单详情</Text>
                <Text>厕所id：{this.state.id}</Text>
                <Text>备注：{this.state.text}</Text>
                <Text>联系方式：{this.state.tel}</Text>
                <Button 
                    titleStyle={styles.buttonStyle}
                    title="修改订单信息"
                    onPress={() => this.props.navigation.navigate('Modify')}
                />
                <Button 
                    titleStyle={styles.buttonStyle}
                    title="eeee"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </ThemeProvider>
        );
    }

}

class Detailinfo extends Component{

    constructor(){
        super();
        this.state={
            time:'12:00',
            info:'2316aaa',
        }
    }

    render(){
        return(
            <ThemeProvider>
                <Text>预计送达时间：{this.state.time}</Text>
                <Text>{this.state.info}为您送纸</Text>
                <Button 
                    titleStyle={styles.buttonStyle}
                    title="修改订单信息"
                    onPress={() => this.props.navigation.navigate('Modify')}
                />
                <Button 
                    titleStyle={styles.buttonStyle}
                    title="已收到"
                    onPress={() => this.props.navigation.navigate('Evaluation')}
                />
            </ThemeProvider>
        );
    }

}

class Evaluat extends Component{

    constructor(){
        super(),
        this.state={
            textvalue:''
        }
    }

    getValue(text){
        this.setState({
            textvalue: text
          })
    }

    render(){
        return(
            <ThemeProvider>
                <Input
                    label="评价"
                    placeholder='请为送纸小哥打个五星好评= ='
                    onChangeText={text=>this.getValue(text)}
                />
                <Button 
                    titleStyle={styles.buttonStyle}
                    title="确定"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </ThemeProvider>
        );
    }

}

const Stack = createStackNavigator();

function SendPaperView() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Infosendpaper} />
        <Stack.Screen name="Modify" component={Modifyinfo} />
        <Stack.Screen name="Waiting" component={Waiting} />
        <Stack.Screen name="Detail" component={Detailinfo} />
        <Stack.Screen name="Evaluation" component={Evaluat} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    buttonStyle:{
        color: 'red'
    },
});

export default SendPaperView;
import { MapView, Marker } from "react-native-amap3d";
import React, { Component } from "react"
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';

//navigator.geolocation = require('@react-native-community/geolocation');

export default class JMap extends Component {
    constructor() {
        super();
        this.state = {
            latitude: 23.334,
            longitude: 80.35
        }
    }

    my_data = {
        mx: 10,
        w: 0,   
        j: 0
    };
    change(latitude, longitude) {
        this.setState({ latitude: latitude, longitude: longitude });
        this.my_data.w = latitude;
        this.my_data.j = longitude;
        this.get_info();
        console.log(this.state);
        console.log(this.state.datas);
    }

    get_info() {
        var url = "http://pzzzzz.live:9080/getToilet?"
        let query = Object.keys(this.my_data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(this.my_data[k]))
            .join('&');
        //console.log(url,query);
        let now_url = url + query;
        console.log(now_url)
        fetch(now_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.mx, "ok");
                this.setState({ datas: responseJson }, function () { });
            }).catch((error) => {
                alert(error);
            });
    }
    componentDidMount() {

    }

    getLocation() {

    }
    render() {
        var pages = [];
        console.log(typeof(this.state.datas));
        if (this.state.datas != undefined) {
            for (var i = 0; i < this.state.datas.mx; i++) {

                console.log(i,'  p');
                pages.push(
                    <Marker
                        activeF
                        title='厕所'
                        color='red'
                        description={'id: '+this.state.datas.ans[i][0].toString()}
                        coordinate={
                            {
                                latitude: parseFloat(this.state.datas.ans[i][1]),
                                longitude: parseFloat(this.state.datas.ans[i][2])
                            }
                        }
                    />
                );
                console.log(this.state.datas.ans[i][1], this.state.datas.ans[i][2]);
            }
        }
        return (

            <MapView locationEnabled onLocation={({ nativeEvent }) => this.change(nativeEvent.latitude, nativeEvent.longitude)} style={StyleSheet.absoluteFill} center={this.state} showsLocationButton
                zoomlevel={15} coordinate={this.state} zoomLevel={17}>
                {pages}
            </MapView>
        );
    }
}
import { MapView, Marker } from "react-native-amap3d";
import React, { Component } from "react"
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';

export default class JMap extends Component {
    constructor() {
        super();
        this.state = {
            latitude: 23.334,
            longitude: 80.35
        }
    }
    change(latitude,longitude){
        this.setState({latitude:latitude,longitude:longitude});
    }
    render() {
        const { latitude, longitude } = this.state;
        return (
            <MapView locationEnabled onLocation={({ nativeEvent }) => this.change(nativeEvent.latitude, nativeEvent.longitude)} style={StyleSheet.absoluteFill} center={this.state} showsLocationButton
                zoomlevel={15} coordinate = {this.state} zoomLevel={17}> 
                <Marker
                    activeF
                    title='厕所'
                    color='red'
                    description='小厕所'
                    coordinate={
                        this.state
                    }
                />
            </MapView>
        );
    }
}
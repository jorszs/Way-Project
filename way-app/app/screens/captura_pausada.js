import React, { Component } from "react";
import {StyleSheet, View, Text } from "react-native";
import MapView from 'react-native-maps';

export default class Captura_pausada extends Component {
    render() {
        return (
            /*<View style={styles.vieBody}>
                <Text>HOME SCREEN...........'?</Text>
            </View>*/
            <MapView style={{flex: 1}}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            />
        )
    }
}

const styles = StyleSheet.create({
    vieBody: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        //backgroundColor: "#243C3C", //"#5DBCD2",
        justifyContent: "center",
        color: "#243C3C"
        //position: "absolute"
    }
});

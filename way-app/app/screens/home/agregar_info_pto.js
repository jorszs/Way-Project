import React, { Component } from "react";
import {StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import Formulario from '../../formulario/formpto';

export default class Agg_info extends Component {
    render() {
        return (
            <View style={styles.agg_info}>
                <Formulario />
            </View>
                
        );
    }
}

const styles = StyleSheet.create({
    agg_info: {
        flex:1,
        justifyContent: "center",
        backgroundColor: "#243C3C",
        paddingLeft: 60,
        paddingRight: 60
    }
});

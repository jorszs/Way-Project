import React, { Component } from "react";
import {StyleSheet, View, Text } from "react-native";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.vieBody}>
                <Text>home Screen..</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    vieBody: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#fff"
    }
});


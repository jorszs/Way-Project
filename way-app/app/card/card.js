import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default class Card extends Component {

    goToScreen = nameScreen => {
        this.props.navigation.navigate(nameScreen)
    };

    render() {
        return (
                
                <TouchableOpacity style={styles.card} onPress={() => this.goToScreen("Seguir_ruta")}>
                    <Image style={styles.cardImage} source = {require('../src/imgs/download.jpg')} />
                    <Text style={styles.cardText}>Mi Ruta </Text>

                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    styleImage: {
        width: 200,
        height: 200,
        marginEnd: 30
    },
    card: {
        marginTop: 20,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: "cover"
    },
    cardText: {
        padding: 10,
        fontSize: 16
    }
});

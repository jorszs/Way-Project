import React, { Component } from "react";
import {StyleSheet, View, Text, Button, Alert, Image, TouchableOpacity, ScrollView, ScrollViewComponent } from "react-native";
import Card from '../../card/card';
import MapView from 'react-native-maps';
import { TouchableHighlight } from "react-native-gesture-handler";

/*<TouchableHighlight onPress={() => Alert.alert('Mi ruta 1')} style = { styles.boton }>
                    <Image 
                        style =  { styles.styleImage}
                        source = { require('../../src/imgs/download.jpg')}//'../../src/imgs/download.jpg') }
                    />
                    
                </TouchableHighlight>*/

export default class Mis_rutas extends Component {

    goToScreen = nameScreen => {
        this.props.navigation.navigate(nameScreen)
    };

    render() {
        return (
            <ScrollView>
                <TouchableOpacity style={styles.card} onPress={() => this.goToScreen("Seguir_ruta")}>
                    <Image style={styles.cardImage} source = {require('../../src/imgs/download.jpg')} />
                    <Text style={styles.cardText}>Mi Ruta </Text>

                </TouchableOpacity>

            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    vieBody: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#243C3C", //"#5DBCD2",
        //justifyContent: "center",
        //color: "#243C3C"
        //position: "absolute"
    },
    container: {
        flex: 1,
        //marginTop: 20,
        backgroundColor: "#243C3C"
    },
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

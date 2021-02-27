import React, {Component} from "react";
import {StyleSheet, View, Text, Button, Alert, TouchableOpacity} from "react-native";



export default class configuracion extends Component {

    goToScreen = nameScreen => {
        //console.log(nameScreen)
        //this.props.navigation.navigate(nameScreen)
        this.props.navigation.goBack()
    };


    render() {
        return(
            <View style={styles.viewBody}>
                <TouchableOpacity style={styles.button} onPress={this.buttonPressed} >
                    <Text style={styles.btntext}>Temas</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.goToScreen()} >
                    <Text style={styles.btntext}>Lenguajes</Text>
                    
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    viewBody: {
        flex: 1,
        backgroundColor: "#243C3C",
        justifyContent: "center",
        alignSelf: "stretch"
    },
    button: {
        alignSelf:"stretch",
        alignItems:"center",
        padding:20,
        backgroundColor: '#59cbbd',
        marginTop:30
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    }
}
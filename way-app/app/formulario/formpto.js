import React,{Component} from "react";
import {StyleSheet, View, Text, Alert, TextInput, TouchableOpacity, Button, Image } from "react-native";
import { withNavigation } from 'react-navigation';
import { TouchableHighlight } from "react-native-gesture-handler";
export default class formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombrePunto: '',
            informacionPunto: ''
        }
    }

    goToScreen = () => {
        //console.log(nameScreen)
        //const { goBack } = this.props.navigation;
        //goBack()
        this.props.navigation.goBack()
    };

    back() {
        const {goBack} = this.props.navigation;
        goBack(); 
    }

    changenombrePunto(nombrePunto){
        this.setState({nombrePunto})
    }
    
    changeinforuta(informacionPunto){
        this.setState({informacionPunto})
    }

    buttonPressed = () => {
        if(this.state.nombrePunto && this.state.informacionPunto){
            //() => this.goToScreen()
            Alert.alert("informacion completa"+" "+this.state.nombrePunto)
        }else{
            Alert.alert("error!, completa todos los campos")
        }
        //Alert.alert("error!")
    }

    render() {
        //const { goBack } = this.props.navigation;
        
        return(
            <View style={styles.aggInfo}>
                <Text style={styles.header}>Ingrese la informacion</Text>

                <TextInput style={styles.textinput} 
                    placeholder="Nombre punto de interes*"
                    underlineColorAndroid={'transparent'}
                    value={this.state.nombrePunto}
                    onChangeText = {(nombrePunto) => this.changenombrePunto(nombrePunto)}
                    />

                <TextInput style={styles.textinput} 
                    placeholder="Informacion del punto de interes *"
                    underlineColorAndroid={'transparent'}
                    value={this.state.informacionPunto}
                    onChangeText = {(informacionPunto) => this.changeinforuta(informacionPunto)}
                    />

                <TouchableOpacity style={styles.button} onPress= {this.buttonPressed} >
                    <Text style={styles.btntext}>Listo</Text>
                    
                </TouchableOpacity>
                
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    aggInfo: {
        alignSelf: "stretch"
    },
    header: {
        fontSize:24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
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
    },
    
    styleImage: {
        //flex: 1,
        width: 50,
        height: 50,
        //justifyContent: "center",
        marginEnd: 30,
        marginBottom: 0,
        marginVertical:0,
        marginLeft: 0,
        marginRight:0,
        //top:-30,
        marginTop:0,
        //padding: 10
        //elevation: 4
        //flexDirection: "column-reverse"
    }
})
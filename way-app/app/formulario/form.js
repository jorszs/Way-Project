import React,{Component} from "react";
import {StyleSheet, View, Text, Alert, TextInput, TouchableOpacity, Button } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Icon, Image } from "react-native-elements";
import { ImagePicker } from "expo";
//import { Camera } from 'expo-camera';
//import { Permissions } from "expo";
import Toast, { DURATION } from "react-native-easy-toast";
import CameraComponent from "../camera/camera";
import camNroll from "../camera/cameraNroll";
import Constants from 'expo-constants';
import {PermissionsAndroid} from 'react-native';
import * as Permissions from 'expo-permissions';
/*<View>
    <CameraComponent></CameraComponent>
  </View> */
export default class formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombreRuta: '',
            informacionRuta: ''
        }
    }

    changenombreruta(nombreRuta){
        this.setState({nombreRuta})
    }
    
    changeinforuta(informacionRuta){
        this.setState({informacionRuta})
    }

    buttonPressed = ({navigation}) => {
        if(this.state.nombreRuta && this.state.informacionRuta){
            Alert.alert("informacion completa"+" "+this.state.nombreRuta)
            //() => this.props.navigation.navigate('Home')
        }else{
            Alert.alert("error!, completa todos los campos")
        }
        //Alert.alert("error!")
    }

    goToScreen = nameScreen => {
        //console.log(nameScreen)
        this.props.navigation.navigate(nameScreen)
    };

    uploadImage = async () => {
        const resultPermission = await Permissions.askAsync(
            Permissions.CAMERA_ROLL
            );
        console.log(resultPermission.status)
        if (resultPermission.status === "denied") {
            this.refs.toast.show(
                "Es necesario aceptar los permisos de la galeria",
                1500
            );
        }   else {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: True,
            });

            if(result.cancelled) {
                this.refs.toast.show("Has cerrado la galeria de imagenes", 1500);   
            } else {
                console.log(result);
            }
        }
    };

    CameraFuntion = async () => {
        const resultPermission = await Permissions.askAsync(
            Permissions.CAMERA
            );
        console.log(resultPermission.status)
        if (resultPermission.status === "denied") {
            this.refs.toast.show(
                "Es necesario aceptar los permisos de la galeria",
                1500
            );
        }   else {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: True,
            });

            if(result.cancelled) {
                this.refs.toast.show("Has cerrado la galeria de imagenes", 1500);   
            } else {
                console.log(result);
            }
        }
    };

    /*CameraFuntion = async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Cool Photo App Camera Permission',
              message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
          } else {
            console.log('Camera permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
*/
    render(navigation) {
        return(
            <View style={styles.aggInfo}>
                <Text style={styles.header}>Ingresa la informacion</Text>

                <TextInput style={styles.textinput} 
                    placeholder="Nombre ruta*"
                    underlineColorAndroid={'transparent'}
                    value={this.state.nombreRuta}
                    onChangeText = {(nombreRuta) => this.changenombreruta(nombreRuta)}
                    />

                <TextInput style={styles.textinput} 
                    placeholder="Informacion de la ruta *"
                    underlineColorAndroid={'transparent'}
                    value={this.state.informacionRuta}
                    onChangeText = {(informacionRuta) => this.changeinforuta(informacionRuta)}
                    />
                
                <TouchableOpacity style={styles.button} onPress={() => this.uploadImage()}/*onPress={this.buttonPressed}*/ >
                    <Text style={styles.btntext}>upload</Text>
    
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.CameraFuntion()}/*onPress={this.buttonPressed}*/ >
                    <Text style={styles.btntext}>camera</Text>
                    
                </TouchableOpacity>
                
                <Toast 
                    ref="toast"
                    position="bottom"
                    positionValue={320}
                    fadeInDuration={1000}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color: "#fff"}}
                /> 
                
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
    viewIconUploadPhoto: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 12,

    },
    addPhotoIcon: {
        backgroundColor: "#e3e3e3",
        padding: 17,
        paddingBottom: 14,
        margin: 0

    }
})
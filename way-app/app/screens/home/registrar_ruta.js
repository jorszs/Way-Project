import React, { Component } from "react";
import {StyleSheet, View, Text, Image, Alert, ParentView } from "react-native";
import MapView, { Marker, Polyline } from 'react-native-maps';
import { TouchableHighlight } from "react-native-gesture-handler";
import {PermissionsAndroid} from 'react-native';


/*
            <View style = { styles.boton }>

                <TouchableHighlight onPress={() => Alert.alert('cancelar captura')} >
                    <Image 
                        style =  { styles.styleImage}
                        source = { require('../../src/imgs/cancelar.png') }
                    />   

                </TouchableHighlight> 
            
                <TouchableHighlight onPress={() => Alert.alert('pausar ruta')} >
                    <Image 
                        style =  { styles.styleImage}
                        source = { require('../../src/imgs/botones-pausa.png') }
                    />

                </TouchableHighlight>

                <TouchableHighlight onPress={() => Alert.alert('captura finalizada')} >
                    <Image 
                        style =  { styles.styleImage}
                        source = { require('../../src/imgs/ok.png') }
                    />   

                </TouchableHighlight> 
   
            </View>
*/

/*region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} */
export default class Registrar_rutas extends Component {

    goToScreen = nameScreen => {
        //console.log(nameScreen)
        this.props.navigation.navigate(nameScreen)
        //this.props.navigation.goBack()
    };

    constructor(props){
        super(props)

        this.state = {
            loading: false,
            data: [
                { latitude: 37.8025259, longitude: -122.4351431 },
                { latitude: 37.7896386, longitude: -122.421646 },
                { latitude: 37.7665248, longitude: -122.4161628 },
                { latitude: 37.7734153, longitude: -122.4577787 },
                { latitude: 37.7948605, longitude: -122.4596065 },
                
            ],
            error: null,
            refreshing: false,
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,        
        }
    }

    render() {
        return (
            <View style={styles.container}>
            
            <MapView
                style={styles.map}
                
            >
            
            <Polyline
                    coordinates={this.state.data}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={6}
                />
            <MapView.Marker
                coordinate={{
                    latitude: 37.8025259,
                    longitude: -122.4351431 
                }}
                titule= "my location"
                description= "here i am..."
            />
            </MapView>

            <View style = {styles.botonLateral}>
                
                <TouchableHighlight onPress={() => this.goToScreen('Agg_info_punto')} >
                    <Image 
                        style =  { styles.styleImageBanderilla}
                        source = { require('../../src/imgs/banderilla.png') }
                    />   

                </TouchableHighlight>  

            </View>

            <View style = { styles.boton }>

                <TouchableHighlight onPress={() => this.goToScreen('Home')} >
                    <Image 
                        style =  { styles.styleImage}
                        source = { require('../../src/imgs/cancelar.png') }
                    />   

                </TouchableHighlight> 
            
                <TouchableHighlight onPress={() => this.goToScreen('Captura_pausada')} >
                    <Image 
                        style =  { styles.styleImage}
                        source = { require('../../src/imgs/botones-pausa.png') }
                    />

                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.goToScreen('Agg_info_ruta')} >
                    <Image 
                        style =  { styles.styleImage}
                        source = { require('../../src/imgs/ok.png') }
                    />   

                </TouchableHighlight> 
   
            </View>
        </View>
        )
    }
}
/*
const styles = StyleSheet.create({
    vieBody: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        //backgroundColor: "#243C3C", //"#5DBCD2",
        justifyContent: "center",
        color: "#243C3C"
        //position: "absolute"
    },

    boton: {
        //elevation: 4,
        height: 80,
        marginBottom: 0,
        flexDirection: 'row',
        //justifyContent: 'center',
        justifyContent: 'space-around'
        //display: flex

    }
});*/
const styles = StyleSheet.create({
    vieBody: {
        flex: 1,
        //alignItems: "center",
        //alignContent: "center",
        //backgroundColor: "#243C3C", //"#5DBCD2",
        //justifyContent: "center",
        color: "#243C3C"
        //position: "absolute"
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        
        justifyContent: 'flex-end',
        //alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        //height: 400,
        width: 400,       
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
    },
    boton: {
        //elevation: 4,
        height: 80,
        marginBottom: 0,
        flexDirection: 'row',
        //justifyContent: 'center',
        justifyContent: 'space-evenly'
        //display: flex

    },
    banderilla: {
        //flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'flex-start',
        //alignItems: 'flex-start',
        //flexDirection: 'row-reverse'

        //width: 50,
        //height: 50, 


    },
    styleImageBanderilla: {
        //flex: 1,
        width: 50,
        height: 65,
        //alignItems: 'flex-end',
        //justifyContent: "center",
        //marginEnd: 30,
        //marginBottom: 0,
        //marginVertical:0,
        //marginLeft: 0,
        //marginRight:0,
        //top:-30,
        //marginTop:0,
        //padding: 10
        //elevation: 4
        //flexDirection: "column"
    },
    botonLateral: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20,
        marginRight: 20

    }

    
});

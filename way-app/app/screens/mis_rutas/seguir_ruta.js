import React, { Component } from "react";
import {StyleSheet, View, Text, Button, Alert, Image, Platform } from "react-native";
import Constants from 'expo-constants';

//import MapView from 'react-native-maps';
import Cookies from 'js-cookie';
import MapView, { Marker,Polyline } from 'react-native-maps';
import { TouchableHighlight } from "react-native-gesture-handler";
import GetLocation from 'react-native-get-location';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//esta funcion sirve para colocar una imagen como titulo del header, puede ser llamado desde
//static navigationOption 
class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../../src/imgs/configuracion.png')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }


export default class Seguir_ruta extends Component {


    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            location: null,
            errorMessage: null,
            location: null,
            errorMessage: null,
    }

        this.res = [
			{ latitude: 37.8025259, longitude: -122.4351431 },
			{ latitude: 37.7896386, longitude: -122.421646 },
			{ latitude: 37.7665248, longitude: -122.4161628 },
			{ latitude: 37.7734153, longitude: -122.4577787 },
			{ latitude: 37.7948605, longitude: -122.4596065 },
			
		]
            
        this.index = 1;

        this.interval =  () => setInterval(function(){
            this.index++
            Alert.alert(this.index.toString())
            //Alert.alert(index)
            console.log(index)
            //console.log(this.state.data)
        },5000);

        //Obtener locacion GPS
        this.locationGPS = () => GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            //console.log(location["coord"]["latitude"]);
            this.state.location = location["coord"]["latitude"];
            if (this.state.location === null) {
                console.log("location null");
            }else {console.log(this.state.location)}
            //this.state.latitude = location["coord"]["latitude"];
            //this.state.longitude = location["coord"]["longitude"]
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })


    }
    //location
    /*state = {
        location: null,
        errorMessage: null,
      };*/
    
    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
        }
    
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
      };
    
    //location
    goToScreen = nameScreen => {
        this.props.navigation.navigate(nameScreen)
    };

    //funcion llenar lista de coordenadas para graficar polyline

    
 /* static navigationOptions = ({ navigation }) => {

    return {
      //headerTitle: <LogoTitle />,
      headerRight: (
        
        <TouchableHighlight style={{marginRight: 10}} onPress={() => navigation.navigate('configuracion')} >
            <Image 
                style =  { {width: 30, height: 30, }}
                source = { require('../../src/imgs/configuracion.png') }
            />
        </TouchableHighlight>
        
      ),
    };
};*/

    
    
    render() {
        //let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
            console.log(this.state.errorMessage);
        } else if (this.state.location) {
            //text = JSON.stringify(this.state.location);
            //console.log(this.state.location);
            //console.log(this.state.location)
            console.log(this.state.location["coords"]["latitude"])
            
            //this.state.
        }
        return (
           
            
        <View style={styles.container}>
            
            
            <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,//this.state.latitude,//*37.78825,
                    longitude: -122.4324,//this.state.longitude,//-122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Polyline
                    coordinates={this.res}
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
                        latitude: this.state.latitude,//this.res[0]["latitude"],//this.state.latitude,//37.78825,
                        longitude: this.state.longitude,//this.res[0]["longitude"]//this.state.longitude,//-122.4324,
                    }}
                    titule= "my location"
                    description= "here i am..."
                />
            
            </MapView>

            <View style = { styles.boton }>
            
                <TouchableHighlight onPress={this.locationGPS} >
                    <Image 
                        style =  { styles.styleImage}
                        source = { require('../../src/imgs/plus.png') }
                    />
                
                </TouchableHighlight>                  

        </View>    
        </View>
        
          
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
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        
        justifyContent: 'flex-end',
        alignItems: 'center',
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
        justifyContent: "center",
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
        //flexDirection: 'column',
        //alignContent: 'flex-end',
        //justifyContent: 'flex-start',
        //justifyContent: 'space-around'
        //display: flex

    },
    imgheader: {
        width: 50,
        height: 50,
    }

    
});

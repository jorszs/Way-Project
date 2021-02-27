import React, { Component } from "react";
import {StyleSheet, View, Text, Marker, Button, Alert, Image, } from "react-native";
import MapView from 'react-native-maps';
import Cookies from 'js-cookie';
//import MapView, { Marker } from 'react-native-maps';
import { TouchableHighlight } from "react-native-gesture-handler";
import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

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


export default class Home extends Component {


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
        }

        this.res = [
            {
            "id_Ruta": 2, 
            "Nombre": "ruta2", 
            "altitud": "84854.558.55", 
            "longitud": "114.225.336", 
            "Archivoruta": "ajsjajaj", 
            "Descripcion": "ruta masrzsella", 
            "Duracion": "1 hora"
            }, 
            
            {
            "id_Ruta": 1, 
            "Nombre": "ruta1", 
            "altitud": "11.225.225", 
            "longitud": "114.255.22", 
            "Archivoruta": "api/list'", 
            "Descripcion": "Rutas alatalfracia", 
            "Duracion": "1 hora"
            },
             
            {
            "id_Ruta": 3, 
            "Nombre": "kkk", 
            "altitud": "fsd", 
            "longitud": "ssd", 
            "Archivoruta": "sdsd",
            "Descripcion": "sdsd", 
            "Duracion": "sdsd"
          }
        ]

        this.index = 1;

        this.interval =  () => setInterval(function(){
            this.index++
            Alert.alert(this.index.toString())
            //Alert.a
            lert(index)
            console.log(index)
            //console.log(this.state.data)
        },5000); 
    }

    //traer informacion del appi
    /*componentDidMount(){
        this.fetchDataFromApi();
    }

    componentDidMount() {
        axios.get('http://10.253.3.221:8000/api/list')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      }
*/
    componentWillMount() {
        //xsrfHeaderName: "X-CSRFToken"
        //const csrftoken = Cookies.get('csrftoken');
        /*const config = {
          headers: {'HTTP_X_CSRFTOKEN': csrftoken},
        }*/
        
        axios.post('http://192.168.1.56:8000/api/list', {
            id_ruta: '123',
            Nombre: 'Flintstone',
            altitud:'4545',
            longitud:'525545',
            Archivoruta:"sdfsfs",
            Descripcion:"dfdf",
            Duracion:"sdksdsd"

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }  

    //

      /*async function makePostRequest() {

        params = {
            id: 6,
            first_name: 'Fred',
            last_name: 'Blair',
            email: 'freddyb34@gmail.com'
          }
    
        let res = await axios.post('http://localhost:3000/users/', params);
    
        console.log(res.data);
    }
    
    makePostRequest();*/
   /* 
    fetchDataFromApi = ()  => {
        const url = "http://10.253.23.87:8000/api/list";//"127.0.0.1:8000/api/list";//https://pyconlunchbeta.azurewebsites.net/api/list.json
    
        this.setState({ loading: true });
        console.log("holas")
        fetch(url)
          .then(res => res.json())
          .then(res => {
            //console.log(res)
            //Alert.alert("holass")
            this.setState({
              data: res,
              error: null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
            //console.log(error)  
            this.setState({ error, loading : false });
          })
      };*/
      
      handleRefresh = () => {
        this.setState(
          {
            refreshing: true
          },
          () => {
            this.fetchDataFromApi();
          }
        );
      };
      

    goToScreen = nameScreen => {
        //console.log(nameScreen)
        //this.handleRefresh()
        //data = this.state.data
        //console.log(this.state)
        this.props.navigation.navigate(nameScreen)
        
    };
    //coloca un objeto estatico en el header de navegacion de solamente esta screen 
    /*static navigationOptions = {
    //headerTitle: <LogoTitle />,
    headerRight: (
        <Button
            onPress={() => this.props.navigation.navigate(nameScreen)}
            title="Info"
            color="#fff"
      /> 
       // <TouchableHighlight style={{marginRight: 10}} onPress={() => this.props.navigation.navigate('Registrar_ruta')} >
       //     <Image 
       //         style =  { {width: 30, height: 30, }}
       //         source = { require('../../src/imgs/configuracion.png') }
       //     />
       // </TouchableHighlight>
    ),
  };*/

  static navigationOptions = ({ navigation }) => {

   /* constructor(props) {
        super(props)

        this.state = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,        
        }
    }*/


    //Intervalo
    /*var index = 11;
    var interval = setInterval(function(){
        index++
        Alert.alert(index.toString())
        //Alert.alert(index)
        //console.log(index)
    },5000);*/

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
};


      

    render() {
        return (
           
            
        <View style={styles.container}>
            
            
            <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
            <MapView.Marker
                coordinate={{
                    latitude: this.state.latitude,//37.78825,
                    longitude: this.state.longitude,//-122.4324,
                }}
                titule= "my location"
                description= "here i am..."
            />
            </MapView>

            
            
            <View style = { styles.boton }>
            
                <TouchableHighlight onPress={ () => this.goToScreen('Registrar_ruta') } >
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

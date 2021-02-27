
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
//import MapView from 'react-native-maps';
import HomeScreen from './app/screens/home/home';
//import MisRutasScreen from './app/screens/mis_rutas';
import UserNavigation from './app/navigations/user';
//import { Camera } from 'expo-camera';
//import cam from './app/camera/camera';
export default class App extends React.Component {
  render() {
    return (
      /*<MisRutasScreen/>
      <HomeScreen/>
       <Text>hola mundo</Text> */
      
      <View style={styles.container}>
        <UserNavigation/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center"

  }

});

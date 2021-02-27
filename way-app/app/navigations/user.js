import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { Button } from "react-native";

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//Screens

import HomeScreen from "../screens/home/home";
import Captura_pausada from "../screens/captura_pausada";
//import Informacion_ruta from "../screens/informacion_ruta";
import Mis_rutas from "../screens/mis_rutas/mis_rutas";
import CardScreen from "../card/card";
import Seguir_rutaScreen from "../screens/mis_rutas/seguir_ruta";
import Registrar_rutaScreen from "../screens/home/registrar_ruta";
import Captura_pausadaScreen from "../screens/home/captura_pausada";
import Agg_info_rutaScreen from "../screens/home/agregar_info_ruta";
import Agg_info_ptoScreen from "../screens/home/agregar_info_pto";
import ConfiguracionScreen from "../screens/configuracion/configuracion";

const homeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: "Home"
        })
    },
    Registrar_ruta: {
        screen: Registrar_rutaScreen,
        navigationOptions: ({navigation}) => ({
            title: "Registrar ruta"
        })
    },
    Captura_pausada: {
        screen: Captura_pausadaScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Captura pausada'
        }) 
    },
    Agg_info_ruta: {
        screen: Agg_info_rutaScreen,
        navigationOptions: ({navigation}) => ({
            title: "agregar informacion de ruta"
        })
    },
    Agg_info_punto: {
        screen: Agg_info_ptoScreen,
        navigationOptions: ({navigation}) => ({
            title: "Agregar informacion de punto"
        })
    },
    configuracion: {
        screen: ConfiguracionScreen,
        navigationOptions: ({navigation}) => ({
            title: "congiguraciones"
        })
    }
});

const misRutasStack = createStackNavigator({
    Rutas: {
        screen: Mis_rutas,
        navigationOptions: ({navigation}) => ({
            title: "Mis Rutas"
        }) 
    },
    Seguir_ruta: {
        screen: Seguir_rutaScreen,
        navigationOptions: ({navigation}) => ({
            title: "Seguir ruta"
        })
    },
    Card: {
        screen: CardScreen,
        navigationOptions: ({navigation}) => ({
            title: "Card"
        })
    }
})

const capturaPausadaStack = createStackNavigator({
    Home: {
        screen: Captura_pausada,
        navigationOptions: ({navigation}) => ({
            title: "Captura pausada"
        })
    }
});

const configuracionStack = createStackNavigator({
    configuracion: {
        screen: ConfiguracionScreen,
        navigationOptions: ({navigation}) => ({
            title: "congiguraciones principales"
        })
    }
})

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../src/imgs/botones-pausa.png')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }
const RootStack = createBottomTabNavigator({
    Home: {
        screen: homeScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => 
            <Icon 
                name = "home"
                type = "material-communnity"
                size = {30}
                color = {tintColor}
            />
            
            
        })
        
    },
    MisRutas: {
        screen: misRutasStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Mis Rutas",
            tabBarIcon: ({ tintColor }) => 
            <Icon
                name = "star-outline"
                type = "material-community"
                size = {30}
                color = {tintColor}
            />
        })

    }

},
{
    tabBarOptions: {
        inactiveTintColor: "#646464",
        activeTintColor: "#00a680"
    }
}
);

export default createAppContainer(RootStack);
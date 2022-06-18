import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './stackRoutes';
//import Home from '../pages/Home'; //importa o arquivo na pasta pages
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

import Feather from "react-native-vector-icons/Feather";

import EvilIcons from "react-native-vector-icons/EvilIcons";




const Tab = createBottomTabNavigator();

export default function Routes() {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false, // tira o header de todos
                tabBarHiderOnboard: true,
                tabBarShowLabel: false, // tira os nomes da tab
                tabBarActiveTintColor: '#ff0000', // muda a cor depois de selecionado

                tabBarStyle: {
                    backgroundColor: '#555454',
                    borderTopWidth: 5
                    //ou para tira a borda
                    //borderTopWidth: 0

                }

            }}

        >

            <Tab.Screen
                name='HomeStack'
                component={StackRoutes}
                options={{
                    tabBarLabel: 'INICIO',
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" color={color} size={size} /> // chama a stack aqui
                    }
                }}
            />

            <Tab.Screen
                name='Sobre'
                component={Sobre}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <EvilIcons name="user" color={color} size={size} />
                        //return <EvilIcons name="user" color={'#f444'} size={30} />
                    }
                }}
            />

            <Tab.Screen
                name='Contato'
                component={Contato}
                options={{
                    //headerShown: false, // tirar header
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="phone-call" color={color} size={size} />
                        //return <Feather name="phone-call" color={'#2d6930'} size={20} />
                    },
                }}
            />

        </Tab.Navigator>

    );
}
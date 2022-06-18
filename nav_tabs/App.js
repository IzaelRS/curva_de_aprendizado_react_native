import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Contato from "./src/pages/Contato";

import Feather from "react-native-vector-icons/Feather";

import EvilIcons from "react-native-vector-icons/EvilIcons";



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

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
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'INICIO',
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />
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

    </NavigationContainer >
  );
}
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';

import Sobre from './src/pages/Sobre';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          //personalização do HEADER
          options={{
            title: 'Tela Inicio',
            headerStyle: {
              backgroundColor: '#444',
            },

            headerTintColor: '#fff',
            //headerShown: false, tirar a header
          }}
        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
          //personalização do HEADER
          options={{
            title: 'Pagina Sobre'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}



// é preciso instalar as duas dependencias;

//yarn add @react-navigation/native
//yarn add react-native-screens react-native-safe-area-context

//bibliotecas

//yarn add @react-navigation/native-stack
//navegação em pilha

//yarn add @react-navigation/drawer
//navegação slide

//yarn add @react-navigation/bottom-tabs
//botòes de navegações

//yarn add @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
// botões icons de navegações

//yarn add @react-navigation/material-top-tabs react-native-tab-view
// slide e transição 


import React from "react";

import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Contato from "./src/pages/Contato";

// configuração de rota

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />


        <Stack.Screen
          name="Sobre"
          component={Sobre}

        />

        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{
            title: 'Pagina sobre',
            title: 'Tela inicio',
            headerStyle: {
              backgroundColor: '#1212'
            },
            headerTintColor: '#ffffff',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


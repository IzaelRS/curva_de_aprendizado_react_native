import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';


import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (

        <Drawer.Navigator
            // tira header
            screenOptions={{
                headerShown: false,

                // mudar o fundo
                drawerStyle: {
                    backgroundColor: '#121212',

                },
                // selecionar ativo
                drawerActiveBackgroundColor: '#383DBF',

                // selecionar não ativo
                drawerInactiveBackgroundColor: '#CCC',

                // fonte ativa
                drawerActiveTintColor: '#FFF',

                // fonte inativa
                drawerInactiveTintColor: '#F15'


            }}
        >

            <Drawer.Screen
                name='HomeStack'
                component={StackRoutes}
                options={{
                    title: 'Inicio'
                }}
            />

            <Drawer.Screen
                name='Contato'
                component={Contato}
            />

            <Drawer.Screen
                name='Sobre'
                component={Sobre}
            />

        </Drawer.Navigator>


    );
}
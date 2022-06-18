import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';


import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

//importar o componente personalizado
import customDrawer from '../components/customDrawer';


const Drawer = createDrawerNavigator();

export default function Routes() {
    return (

        <Drawer.Navigator
            // componente proprio para renderizar,
            drawerContent={customDrawer}

            // tira header
            screenOptions={{
                headerShown: false,

                // mudar o fundo
                drawerStyle: {
                    backgroundColor: '#828588',

                },
                // selecionar ativo
                drawerActiveBackgroundColor: '#383DBF',

                // selecionar não ativo
                drawerInactiveBackgroundColor: '#CCC',

                // fonte ativa
                drawerActiveTintColor: '#FFF',

                // fonte inativa
                drawerInactiveTintColor: '#135a91'


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
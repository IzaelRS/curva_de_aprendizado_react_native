import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            {/* esse stack, não tem uma TAb na parte inferio do App */}
            <Stack.Screen
                name='Detalhes'
                component={Detalhes}
            />

        </Stack.Navigator>
    );
}


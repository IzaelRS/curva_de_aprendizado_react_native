import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

// depois da instalação ;e nescessario fazer yarn start --reset-cache, assim vai resertar  e limpar cacher do app ( versão 2.5x)

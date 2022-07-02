import React from 'react';
import {View, Text} from 'react-native';

import Pessoa from './components/Pessoa';

export default function App() {
  return (
    <View>
      <Pessoa />

      <Eu name="Izael" sobrenome="Rodrigues" />
    </View>
  );
}
//ou

const Eu = props => {
  return (
    <Text>
      oi, eu sou {props.name} {props.sobrenome}
    </Text>
  );
};

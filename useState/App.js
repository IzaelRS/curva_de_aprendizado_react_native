import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

function App() {

  const [nome, setNome] = useState('Patricia');

  function alteraNome() {
    setNome('Te Amo');
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botao} onPress={alteraNome}>
        <Text style={styles.btnText}>
          Click
        </Text>
      </TouchableOpacity>

      <Text style={styles.texto}>
        {nome}
      </Text>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    color: '#000',
    fontSize: 35,
  },
  botao: {
    backgroundColor: '#222',
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#F32196'

  },
  btnText: {
    fontSize: 15,
    color: '#Fff'
  },

});

export default App;
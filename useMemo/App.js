import React, { useState, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function App() {

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  // esse comando abaixo, toda as vezes que a state_nome for alterada ela irá ser usada
  useEffect(() => {
    async function getstorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }

    getstorage();

  }, []);

  useEffect(() => {

    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome)
    }

    saveStorage();

  }, [nome])

  function alteraNome() {
    setNome(input); // vai receber o input com o que foi digitado...
    setInput('');
  }

  // nome.length vai contar o tantos de letras que tem // useMemo serve para otimizar a quatidade de processamentos
  //const letrasNome = useMemo(()=>{nome.length},[nome]);
  //console.log(letrasNome);
  // ou
  const letrasNome = useMemo(() => {
    console.log('Mudou letra'); // o mudou letra não aparece, só no console. isso é somente um teste
    return nome.length;
  }, [nome]);



  return (
    <View style={styles.container}>

      <TextInput
        placeholder='Seu nome...'
        value={input}
        onChangeText={(texto) => setInput(texto)} // vai pegar o que foi digitado e alterar para função setInput
      />

      <TouchableOpacity style={styles.botao} onPress={alteraNome}>
        <Text style={styles.btnText}>
          Alterar Nome
        </Text>
      </TouchableOpacity>

      <Text style={styles.texto}>
        {nome}
      </Text>

      <Text style={styles.texto}>{/* aqui vai mostrar a quantidade de letras que tem */}
        Tem {letrasNome} letras
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
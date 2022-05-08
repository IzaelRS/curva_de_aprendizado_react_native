import React, { useState, useEffect, useMemo, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function App() {

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const nomeInput = useRef(null) // useRef

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
    setNome(input);
    setInput('');
  }

  function novoNome() {
    nomeInput.current.focus(); // referenciando 
  }

  // nome.length vai contar o tantos de letras que tem // useMemo serve para otimizar a quatidade de processamentos
  //const letrasNome = useMemo(()=>{nome.length},[nome]);
  //console.log(letrasNome);
  // ou
  const letrasNome = useMemo(() => {
    console.log('Mudou letra');
    return nome.length;
  }, [nome]);



  return (
    <View style={styles.container}>

      <TextInput
        placeholder='Seu nome...'
        value={input}
        onChangeText={(texto) => setInput(texto)}
        ref={nomeInput} //usando o useRef para chamar o nomeInput
      />

      <TouchableOpacity style={styles.botao} onPress={alteraNome}>
        <Text style={styles.btnText}>
          Alterar Nome
        </Text>
      </TouchableOpacity>

      <Text style={styles.texto}>
        {nome}
      </Text>

      <TouchableOpacity style={styles.botao} onPress={novoNome}>

        <Text style={styles.btnText}>
          novo nome
        </Text>

      </TouchableOpacity>

      <Text style={styles.texto}>
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
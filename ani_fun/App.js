import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';


export default function App() {
  const [largura, setlargura] = useState(new Animated.Value(100));
  const [altura, setaltura] = useState(new Animated.Value(50));
  const [OpacidadeAnimada] = useState(new Animated.Value(0)); // colocar opacidade

  Animated.sequence([

    Animated.timing(
      OpacidadeAnimada,
      {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false
      }
    ),

    Animated.parallel([

      Animated.timing(
        largura,
        {
          toValue: 200,
          duration: 3000,
          useNativeDriver: false
        }
      ),

      Animated.timing(
        altura,
        {
          toValue: 75,
          duration: 3000,
          useNativeDriver: false
        }
      ),

      Animated.timing(
        OpacidadeAnimada,
        {
          toValue: 0,
          duration: 7000,
          useNativeDriver: false
        }
      ),

    ])
  ]).start();

  return (
    <View style={styles.container} >
      <Text style={styles.texto}>Tela Contatos</Text>

      <Animated.View style={{
        width: largura,
        height: altura,
        backgroundColor: '#c5e1a4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity: OpacidadeAnimada, // colocar opacidade

      }}>
        <Text style={styles.textoAnime}>Carregando ...</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#45a315',
  },

  texto: {
    marginBottom: -350,
    fontSize: 25,
    color: '#ccbac0',
  },
  textoAnime: {
    color: '#fff',
    fontSize: 20
  },
})



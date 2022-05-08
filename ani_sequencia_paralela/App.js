import React, { Component } from "react";
import { Text, StyleSheet, View, Animated } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      OpacidadeAnimada: new Animated.Value(0) // deixar a animação opaca

    };


    //usando em sequencia ou paralelo
    //  Animated.sequence([
    Animated.parallel([


      Animated.timing(
        this.state.LarAnimada,
        {
          toValue: 300,
          duration: 2000
        }
      ),

      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 100,
          duration: 3000
        }
      ),

      Animated.timing(
        this.state.OpacidadeAnimada,
        {
          toValue: 1, // como vai terminar. 0 apagar e 1 aparecer
          duration: 2000
        }
      ),

    ]).start(); // preciso para inicializar a sequencia 

    /*
    Animated.timing(
      this.state.LarAnimada,
      {
        toValue: 300,
        duration: 5000
      }
    ).start();

    Animated.timing(
      this.state.AltAnimada,
      {
        toValue: 100,
        duration: 2000
      }
    ).start();
    */


  }

  render() {
    return (
      <View style={styles.container}>

        <Animated.View style={{
          width: this.state.LarAnimada,
          height: this.state.AltAnimada,
          backgroundColor: '#4169E1',
          justifyContent: 'center',
          opacity: this.state.OpacidadeAnimada
        }}>

          <Text style={styles.texto}>
            Carregando...
          </Text>
        </Animated.View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  texto: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center'

  },

})

export default App;
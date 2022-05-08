import React, { Component } from "react";
import { Text, StyleSheet, View, Animated, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(35),
      OpAnimada: new Animated.Value(0), // animação para deixar opaco
    };


    this.inicializar = this.inicializar.bind(this);

  }
  // iniciualizar serve para dar uma função no botão touch para inicializar o grafico, nesse caso ele fioca dentro da propria função 
  inicializar() {
    Animated.sequence([
      Animated.timing(
        this.state.OpAnimada,
        {
          toValue: 1,
          duration: 400
        }
      ),
      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 300,
          duration: 1000
        }
      )
    ]).start();
  }

  render() {
    return (

      <View style={{ flex: 1 }}>

        <View style={{
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#4169E1'
        }}>

          <TouchableOpacity onPress={this.inicializar}>
            <Text style={styles.textoBotao}>
              inicializar...
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.grafico}>

          <Text>
            vendas
          </Text>

          <Animated.View style={{
            width: this.state.LarAnimada,
            height: this.state.AltAnimada,
            opacity: this.state.OpAnimada,
            backgroundColor: '#ff0000',
            justifyContent: 'center',
          }}>

            <Text style={styles.texto}>
              R$ 150,00
            </Text>

          </Animated.View>

        </View>


      </View>

    );

  }

}

const styles = StyleSheet.create({
  grafico: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },

  textoBotao: {
    fontSize: 25,
    color: '#FFFFFF'
  }

})

export default App





import React, { Component } from "react";
import { Text, StyleSheet, View, Animated, } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(0),
      AltAnimada: new Animated.Value(0)
    };

    Animated.timing(
      this.state.LarAnimada,
      {
        toValue: 100,
        duration: 3000
      }
    ).start();

  }

  render() {
    // primeira coisa é preciso criar uma variavel que receba a this.state.larAnimada
    let porcentagem = this.state.LarAnimada.interpolate({
      // depois é precisa fazer a conversão dentro da função interpolate, que esta na variavel
      // e converter pontos em porcentagem 
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    });

    return (

      <View style={styles.container}>

        <Animated.View style={{
          backgroundColor: '#4169E1',
          width: porcentagem, // colocar a variavel no lugar do que seria LarAnimada, 
          // não precisa colocar o this. pelo fato de já esta no render
          height: 25
        }}>

        </Animated.View>
      </View>

    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
})

export default App





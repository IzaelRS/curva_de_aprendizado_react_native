import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto) {
    if (texto.length > 0) {
      this.setState({ nome: 'Bem vindo ' + texto });
    } else {
      this.setState({ nome: '' })
    }

  }


  render() {
    return (
      <View>

        <TextInput
          style={stlyes.input}
          placeholder="Digite seu nome"
          underlineColorAndroid='transparent'
          onChangeText={this.pegaNome}
        />

        <Text style={stlyes.texto}>  {this.state.nome}

        </Text>

      </View>
    );
  }
}

const stlyes = StyleSheet.create({
  meuestilo: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center', fontSize: 20,

  }
});

export default App;
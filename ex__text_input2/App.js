import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input: '',
    };

    this.Entrar = this.Entrar.bind(this);
  }

  Entrar() {
    if (this.state.input === '') {
      alert('Digite seu nome');
      return;
    }
    this.setState({ nome: 'Bem vindo' + this.state.input });
  }


  render() {
    return (
      <View>

        <TextInput
          style={stlyes.input}
          placeholder="Digite seu nome"
          underlineColorAndroid='transparent'
          onChangeText={(texto) => this.setState({ input: texto })}
        />

        <Button title="Entrar" onPress={this.Entrar} />

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
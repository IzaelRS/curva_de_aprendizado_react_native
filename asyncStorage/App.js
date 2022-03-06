import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      nome: ''
    };
    this.gravaNome = this.gravaNome.bind(this)
  }

  //ComponentDidMount - Quando o componete é montado em tela (quando o app é inicializado)
  async componentDidMount() {
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({ nome: value });
    })
  }

  //componentDidUpdate - toda vez que um state é atualizado fazer algo...
  async componentDidUpdate(_, prevState) {
    const nome = this.state.nome; // desconstruiu a state

    if (prevState !== nome) {
      await AsyncStorage.setItem('nome', nome);
    }
  }

  gravaNome() {
    this.setState({
      nome: this.state.input
    });
    alert('salvo com sucesso');
    Keyboard.dismiss();
  } //função gravanome  vai pegar o que digitou dentro do input e jogar dentro da state nome
  //Keybord.dismiss, serve para fechar o teclado

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.viewInput}>

          <TextInput
            // tipo de styles
            style={styles.input}
            // transfomando em um states
            value={this.state.input}
            // função anonima para receber e resetar os dados
            onChangeText={(text) => this.setState({ input: text })}
            // para deixar a caixa transparente
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={styles.botao}>
              +
            </Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.nome}>
          {this.state.nome}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'

  },

  viewInput: {
    flexDirection: 'row', // para deixar o simbolo ao lado da caixa do input
    alignItems: 'center'

  },

  input: {
    width: 350,
    height: 40,
    // ou 
    //flex: 1,
    //margin: 10,
    borderColor: '#000', // cor da borda
    borderWidth: 1, // comando para aparecer a borda
    padding: 10,

  },

  botao: {
    //flex:1, // se fosse flex no input
    backgroundColor: '#222', // cor de fundo do botão
    color: '#fff',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },

  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center',
  }
})

export default App;
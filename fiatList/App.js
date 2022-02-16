import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: 'Patricia', idade: 20, email: 'patricia@patricia.com' },
        { id: '2', nome: 'Izael', idade: 30, email: 'izael@izael.com' },
        { id: '3', nome: 'Pablo', idade: 25, email: 'pablo@pablo.com' },
        { id: '4', nome: 'Alina', idade: 40, email: 'alina@alina' },
        { id: '5', nome: 'Leonardo', idade: 50, email: 'leonardo@leonardo.com' },
      ]
    };
  }

  render() {
    return (
      <View>

        <FlatList
          data={this.state.feed} // lista que ira receber
          keyExtractor={(item) => item.id} // se tiver id
          renderItem={({ item }) => <Pessoa data={item} />} //mostrar lista, renderizar na tela 
        /* renderItem={({ item }) esse item serve para pergar somente uma propriedade do array que no caso é o nome */
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15 // espaçamento entre as margens
  },
  textoPessoa: {
    color: '#fff',
    fontSize: 20,

  },
})


export default App;

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        {/*<Text>
          {this.props.data.nome} {''}
          {this.props.data.idade} {''} // com espaçamento
          {this.props.data.email} {''}
        </Text>*/}

        {/*<Text> {this.props.data.nome} </Text>
        <Text> {this.props.data.idade} </Text> // modo simples
        <Text> {this.props.data.email} </Text>*/}

        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}>email:{this.props.data.email} </Text>

      </View>
    );
  }
}


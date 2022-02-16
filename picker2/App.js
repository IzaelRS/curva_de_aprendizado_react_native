import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; //https://github.com/react-native-picker/picker

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        { Key: 1, nome: 'Strogonoff', valor: 35.90 },
        { Key: 1, nome: 'Calabresa', valor: 45.90 },
        { Key: 1, nome: 'Portuguesa', valor: 55.90 },
        { Key: 1, nome: 'Americana', valor: 25.90 },
        // com essa opção é possivel acrescentar novos itens
      ]               // criando um array 1
    };                // criando states para anexar nos atributos <Picker/selectedValue>
  }
  // dentro de render, criar uma variuavel que contem uma função anonima que recebe o v valor e k a posição 
  render() {

    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.item key={k} value={k} label={v.nome} />
    })

    return (

      <View style={styles.container}>

        <Text style={styles.logo}> Menu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}                                              // para linha abiaxo, foi feito a criação de uma função que seta os valores
          onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })} // quando trocar, vai pegar o itemValue e vai jogar dentro do state pizza 
        >
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}> Você escolheu: {this.state.pizzas[this.state.pizza].nome} </Text>

        <Text style={styles.pizzas}> R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)} </Text>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  logo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },

  pizzas: {
    marginTop: 15,
    fontSize: 25,
    fontStyle: 'italic',
    textAlign: 'center'

  }
});

export default App;
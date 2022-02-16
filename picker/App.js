import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; //https://github.com/react-native-picker/picker

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pizza: 0
    }; // criando states para anexar nos atributos <Picker/selectedValue>
  }

  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.logo}> Menu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}                                              // para linha abiaxo, foi feito a criação de uma função que seta os valores
          onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })} // quando trocar, vai pegar o itemValue e vai jogar dentro do state pizza
        >

          <Picker.Item key={1} value={1} label="Calabresa" />
          <Picker.Item key={2} value={2} label="Frango Catupiri" />
          <Picker.Item key={3} value={3} label="4 Queijos" />

        </Picker>


        <Text style={styles.pizzas}> Você escolheu: Pizza de Calabresa</Text>

        <Text style={styles.pizzas}> R$ 59,00</Text>


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
import React, { Component } from 'react';
import { View, StyleSheet, Button, Modal, Text } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false // pode ser qualquer nome

    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.setState({ modalVisible: true }); // tranfomando o valor da função modalvisible 'false' para true
  }

  sair(estado) {
    this.setState({ modalVisible: estado }); // o estado pode ser qualquer nome, o estado começa false por causa do this.sair(false)
  }

  render() {
    return (

      <View style={styles.container}>
        <Button title='Entrar' onPress={this.entrar} />

        {/* existem várias animações EX: slide */}
        <Modal animationType='slide' visible={this.state.modalVisible}>

          <View style={{ backgroundColor: '#292929', flex: 1 }}>
            <Text style={{ color: '#fff', fontSize: 28 }}>Seja Bem-Vindo !!!</Text>
            {/* melhor exemplo de como fazer uma fução anonima em uma linha, diferente da função entrar */}
            <Button title='Sair' onPress={() => this.sair(false)} />
          </View>

        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  },
});
export default App;
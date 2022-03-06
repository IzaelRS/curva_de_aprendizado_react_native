import React, { Component } from 'react';
import { View, StyleSheet, Button, Modal, Text } from 'react-native';
import Entrar from './src/Entrar'

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
        <Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
          <Entrar fechar={() => this.sair(false)} />
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
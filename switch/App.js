import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }


  render() {
    return (
      <View>

        <Switch
          value={this.state.status} // chamar a state status
          onValueChange={(valor) => this.setState({ status: valor })} // fazendo uma função externa para troca o status de false para true
          thumbColor="#ff0002"
        />

        <Text style={styles.texto1}>

          {(this.state.status) ? "Ativo" : "Inativo"} {/* serve para fazer uma operação de falso e versadeira, se?, seja""verdadeiro, 
          : senão, "" falso */}

        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  texto1: {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center'
  }

})

export default App;




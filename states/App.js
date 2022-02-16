import React, { Component } from "react";
import { View, Text, Button } from 'react-native';


class App extends Component {
  // 0 é preciso fazer um contructor fora do render, esses contructor vai receber todas as props
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };
    // 2.3 depois de criar a função entrar, é preciso dar um binder para o contructor poder ascessar 
    this.entrar = this.entrar.bind(this);
  }

  //2.1 foi feito uma função com o nome de entrar
  entrar() {
    this.setState({
      nome: 'Jose' // 2.4 é preciso deixar a umuntabilidade, então usamos o this.setState, não demos bind no setState porque ele esta dentro do entrar e entrar ja fizemos
    })

  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>

        <Button title="Entrar" onPress={this.entrar} />
        {/* 2.2 precisamos fazere uma nova função ou fazer uma função anomima, nesse caso foi uma função externa */}

        <Text style={{ fontSize: 23, color: 'blue', textAlign: 'center' }}>
          {this.state.nome} {/* 1.1 você chama o state aqui nome */}
        </Text>
      </View>
    );
  }
}

export default App;
import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
//import { computeWindowedRenderLimits } from "react-native/Libraries/Lists/VirtualizeUtils";

class App extends Component {
  render() {
    let nome = "Izael"; /*declarando uma várialvel*/

    return (
      <View>
        <Text>Olá mundo!!!</Text>
        <Text>Meu segundo App</Text>
        <Text style={{ color: '#ff0000', fontSize: 25, margin: 15 }} >
          Sujeito programador
        </Text>

        <Text style={{ fontSize: 40 }}> {nome} </Text>

        <Programador largura={400} altura={200} fulano='professor' />

      </View>
    )
  }
}


export default App; /* Criação de um componente */

class Programador extends Component {
  render() {

    let img = 'https://sujeitoprogramador.com/wp-content/uploads/2021/09/thumb.png';

    return (
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text> {this.props.fulano} </Text>
      </View>
    );
  }
}

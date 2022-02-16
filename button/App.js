

import React, { Component } from "react";
import { View, Text, Button } from 'react-native';



class App extends Component {

    constructor(props) {  /* Construindo um construtor, transformando uma várialvel em global   */
        super(props);
        this.state = {
            nome: ''
        };

        this.entrar = this.entrar.bind(this); {/* Transformando uma função global, transformar as outras funções */ }
    }

    entrar(nome) { /* formando uma váriavel/ incrementando um state no botão*/
        this.setState({
            nome: nome
        })

    }

    render() {
        return (
            <View style={{ marginTop: 40 }}>

                <Button title="Entrar" onPress={() => this.entrar('Patricia')} />
                {/* Inserindo uma função anônima () =),  que serve para tira o loop infinito do botão */}

                <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}>
                    {this.state.nome}
                </Text>
            </View>
        )
    }
}


export default App; /* Criação de um componente */




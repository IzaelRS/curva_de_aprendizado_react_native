import React, { Component } from "react";
import { Text, StyleSheet, View, Animated } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            LarAnimada: new Animated.Value(150), // valor que o style vai receber, valor inicial
            AltAnimada: new Animated.Value(50), // valor que o style vai receber, valor inicial 

        };

        // essa parte é para configurar o valor maximo de tempo e tamanho, 
        Animated.timing(
            this.state.LarAnimada,
            {
                toValue: 300,
                duration: 5000 // equivale 5 seg
            }
        ).start();

        Animated.timing(
            this.state.AltAnimada,
            {
                toValue: 100,
                duration: 2000
            }
        ).start();// essa função serve para dar start na animação, sempre será feito depois do Json


    }

    render() {
        return (
            <View style={styles.container}>

                <Animated.View style={{
                    width: this.state.LarAnimada,
                    height: this.state.AltAnimada,
                    backgroundColor: '#4169E1',
                    justifyContent: 'center'
                }}>

                    <Text style={styles.texto}>
                        Carregando...
                    </Text>
                </Animated.View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    texto: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center'

    },

})

export default App;
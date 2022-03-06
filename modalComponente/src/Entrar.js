import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

class App extends Component {

    render() {
        return (

            <View style={{ backgroundColor: '#292929', width: '100%', height: 350, borderRadius: 10, }}>
                <Text style={{ color: '#fff', fontSize: 28, paddingTop: 5 }}>Seja Bem-Vindo !!!</Text>
                <Button title='Sair' onPress={this.props.fechar} />
            </View>

        );
    }
}
export default App;

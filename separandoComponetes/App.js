import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, } from 'react-native';

// no explorer, faça uma pasta src/ pasta Pessoas/ arquivo Pessoas.js

import Pessoas from './src/Pessoas/Pessoas';
// depois importar o arquivo que foi criado no explorer

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: '1', nome: 'Patricia', idade: 20, email: 'patricia@patricia.com' },
                { id: '2', nome: 'Izael', idade: 30, email: 'izael@izael.com' },
                { id: '3', nome: 'Pablo', idade: 25, email: 'pablo@pablo.com' },
                { id: '4', nome: 'Alina', idade: 40, email: 'alina@alina' },
                { id: '5', nome: 'Leonardo', idade: 50, email: 'leonardo@leonardo.com' },
            ]
        };
    }

    render() {
        return (
            <View syles={styles.container}>

                <FlatList
                    data={this.state.feed}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Pessoas data={item} />}

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});


export default App;



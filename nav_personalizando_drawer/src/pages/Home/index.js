import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    function navegaDetalhes() {
        navigation.navigate('Detalhes')
    }

    function navegaSobre() {
        navigation.navigate('Sobre') // essa função pode ser substituida por uma fução interna {() => {funcao.funcao()}}
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Tela Home
            </Text>

            {/* OU USANDO FUÇÃO interna*/}

            <TouchableOpacity style={styles.btnSobre} onPress={navegaSobre}>
                <Text style={styles.textoSobre}>
                    Sobre
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContato} onPress={() => { navigation.navigate('Contato') }}>
                <Text style={styles.textoContato}>
                    Contatos
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnDetalhes} onPress={navegaDetalhes}>
                <Text style={styles.textoDetalhes}>
                    Detalhes
                </Text>
            </TouchableOpacity>

            {/* Depois de ter tirado no header no ./routes.index, é possivel colocar um botão para subistituir ou ser quiser usar junto 
            com o header, também dá */}
            <TouchableOpacity style={styles.btnDrawer} onPress={() => navigation.openDrawer()}>
                <Text style={styles.textoDrawer}>
                    Voltar ao drawer
                </Text>
            </TouchableOpacity>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f3f3f2',

    },

    texto: {
        fontSize: 23
    },

    btnSobre: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#e91e63',
        borderRadius: 25,
    },

    textoSobre: {
        fontSize: 20,
        color: '#e91e63',
        margin: 5,
        fontStyle: 'italic',
        textAlign: 'center'
    },

    btnContato: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#45a315',
        borderRadius: 25
    },

    textoContato: {
        fontSize: 20,
        color: '#45a315',
        margin: 5,
        fontStyle: 'italic',
        textAlign: 'center'
    },

    btnDetalhes: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#6033aa',
        borderRadius: 25
    },

    textoDetalhes: {
        fontSize: 20,
        color: '#6033aa',
        margin: 5,
        fontStyle: 'italic',
        textAlign: 'center'
    },

    btnDrawer: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#337daa',
        borderRadius: 25
    },

    textoDrawer: {
        fontSize: 20,
        color: '#337daa',
        margin: 5,
        fontStyle: 'italic',
        textAlign: 'center'
    },
})
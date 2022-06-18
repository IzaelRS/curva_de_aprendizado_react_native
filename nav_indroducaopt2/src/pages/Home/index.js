import React from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navegacao = useNavigation();

    function navegaSobre() {
        navegacao.navigate('Sobre', { nome: 'Izael', email: 'izael@teste.com' })
    }

    function navegaContato() {
        navegacao.navigate('Contato')
    }

    return (
        <View style={styles.container}>
            <Text>
                Tela Home
            </Text>

            <Button
                title="Ir para sobre"
                onPress={navegaSobre}
            />

            <Button
                title='Tela Contato'
                onPress={navegaContato}
            />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    function navegaDetalhes() {
        navigation.navigate('Detalhes')
    }

    function navegaSobre() {
        navigation.navigate('Sobre') // essa função pode ser substituida por uma fução interna () => {}
    }

    return (
        <View style={styles.container}>
            <Text>
                Tela Home
            </Text>

            <Button title='Ir para sobre' onPress={navegaSobre} />

            {/* OU USANDO FUÇÃO interna*/}

            <Button title='Ir para contatos' onPress={() => { navigation.navigate('Contato') }} />

            <Button title='Ir para detalhes' onPress={navegaDetalhes} />


        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff000'

    }
})
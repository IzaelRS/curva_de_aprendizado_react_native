import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

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
            <Text>
                Tela Home
            </Text>

            <Button title='Ir para sobre' onPress={navegaSobre} />

            {/* OU USANDO FUÇÃO interna*/}

            <Button title='Ir para contatos' onPress={() => { navigation.navigate('Contato') }} />

            <Button title='Ir para detalhes' onPress={navegaDetalhes} />

            <Button title='Abrir Drawer' onPress={() => navigation.openDrawer()} />
            {/* Depois de ter tirado no header no ./routes.index, é possivel colocar um botão para subistituir ou ser quiser usar junto 
            com o header, também dá */}


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
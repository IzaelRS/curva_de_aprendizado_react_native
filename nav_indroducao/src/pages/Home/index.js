import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native'; // HOOKS useNavigation

export default function Home() {

    const navigation = useNavigation(); // fução nescessaria para usar o useNavigation

    /* botão que ultiliza o onPress para chama a pagina Sobre, pelo atributo 'name' */ 
    return (
        <View style={styles.container}>
            <Text>
                tela Home
            </Text>
            <Button title='Ir para sobre' onPress={() => navigation.navigate('Sobre')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
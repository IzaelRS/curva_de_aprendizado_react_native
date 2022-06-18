import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

export default function Sobre() {

    const route = useRoute();

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Pagina Sobre'
                :
                route.params?.nome
        })
    }, [navigation])

    return (
        <View style={styles.container}>

            <Text>Tela sobre</Text>

            <Text>{route.params?.email}</Text>

            <Text>{route.params?.nome}</Text>

            <Button
                title='Tela Contato'
                onPress={() => navigation.navigate('Contato')}
            />

            <Button
                title='Voltar Tela'
                onPress={() => navigation.goBack()} // volta uma pilha para traz
            />

        </View>
    );
}


// ou

/*
export default function Sobre({ route }) {
    return (
        <View style={styles.container}>
            <Text>Tela sobre</Text>
            <Text>{route.params?.email}</Text>
            <Text>{route.params?.nome}</Text>
        </View>
    )
}
*/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
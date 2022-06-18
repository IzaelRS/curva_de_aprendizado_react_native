import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation, StackActions } from '@react-navigation/native';


export default function Contato() {

    const exemplo_navigation = useNavigation();

    function exfuncao() {
        exemplo_navigation.dispatch(StackActions.popToTop()) // depois do . tem varias funcoes que pode ser anexada, esse exemplo é para zerar a pilha
    }

    return (
        <View>
            <Text>
                Pagina Contato
            </Text>

            <Button
                title='Voltar Home'
                onPress={exfuncao}
            />
        </View>
    );
}
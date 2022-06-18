import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalhes() {

    return (
        <View style={styles.container}>
            <Text>
                Pagina Detalhes
            </Text>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6033aa'
    }
})
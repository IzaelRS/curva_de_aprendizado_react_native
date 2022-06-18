import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

//DrawerContentScrollView = fazer um scroll

//DrawerItemList = fazer uma lista

export default function customDrawer(props) {
    return (
        // usando o spread operator ... irei extrair do parametro props
        <DrawerContentScrollView {...props}>
            <View style={styles.conteiner}>
                <Image
                    source={require('../assets/perfil.png')}
                    style={styles.Imagem}
                />
                <Text style={styles.texto}>
                    Bem Vindo !!!
                </Text>
            </View>

            {/* usando o spread operator ... irei extrair do parametro props */}
            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    );

}

const styles = StyleSheet.create({
    conteiner: {
        width: '100%',
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    Imagem: {
        width: 65,
        height: 65,
    },
    texto: {
        color: '#b1b1b7',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 35
    },
})  
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class App extends Component {
  render() {
    return (
      /* showsVerticalScrollIndicator={false} tirando a imagem da barra lateral */
      /* ScrollEnable={false ou true} serve para ativar e desativar o scroll */
      /* horizontal={true}  deixar o scroll na horizontal*/
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    height: 250,

  },
  box2: {
    backgroundColor: 'blue',
    height: 250,


  },
  box3: {
    backgroundColor: 'green',
    height: 250,

  },
  box4: {
    backgroundColor: 'pink',
    height: 250,

  },

});


export default App;
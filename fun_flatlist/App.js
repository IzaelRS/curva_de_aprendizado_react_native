import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const nomes = [
  {key:'1', nome: 'Izael'},
  {key:'2', nome: 'Patricia'},
  {key:'3', nome: 'Pablo'},
  {key:'4', nome: 'Felipe'},
  {key:'5', nome: 'Leo'},
  {key:'6', nome: 'Karen'},
  {key:'7', nome: 'Rodrigo'},
]

export default function App() {
  return (
    <View>
      <FlatList
      //horizontal={true} // deixa a flat list em horizontal 

      // showsHorizontalScrollIndicator={false}  // tira o scroll

      data={nomes}

      renderItem={({item, index }) =>{ // importante é o usar o método de descontruir

        return(
          <View style={styles.lt}>
            <Text style={styles.text}>{item.nome} 
            { '   ' }
            {index}
            </Text>
          </View>
        );
      }
    }
      
    keyExtractor={(elemento)=> String(elemento.key)} // tem que ser um texto e tem que ser unica // o String é para ter certeza que vai ser identificado dessa forma
      
    //numColumns={2} // deixa em duas colonas 

    //initialNumToRender={} deixa pré carregado em cache para renderização 

    // initialScrollIndex={} // possibilita a inicializacao de um item diferente
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lt:{ 
    borderWidth: 5,
    borderColor: "#302e29",
    height: 50,
    width: 150,
    marginLeft: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems:'center', 
  },

  text:{
    fontSize: 20,

  }

});



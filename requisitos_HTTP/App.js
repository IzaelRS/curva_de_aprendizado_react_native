import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//yarn add axios

import api from './src/services/api';
import Filmes from './src/Filmes';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filmes: []
    };
  }

  async componentDidMount() {
    const respouse = await api.get('r-api/?api=filmes'); // get serve para buscar algo, nesse caso a continuação da url
    this.setState({
      filmes: respouse.data
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Filmes data={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;
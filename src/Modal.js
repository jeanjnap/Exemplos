import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
} from 'react-native';


export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }


  render() {
    modal = <View/>;

    if(this.state.modal)
    modal = <View style={styles.modal}>
              <Text style={styles.Text}>Exemplo de Modal</Text>
              <Button onPress={()=> this.setState({modal: false})} title="Fechar Modal" color="#3498db"/>
            </View>;

    return (
      <View style={styles.container}>
        {modal}
        <View style={styles.content}>
          <Text style={styles.Text}>Texto</Text>
          <Button onPress={()=> this.setState({modal: true})} title="Abrir Modal" color="#3498db"/>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60',
    padding: 10,
  },

  modal: {
    position: 'absolute',
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 200,
    zIndex: 2,
  },

  content: {
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: '#2ecc71',
    padding: 20,
  },

  Text: {
    color: '#fff',
    fontWeight: 'bold',
  },

});
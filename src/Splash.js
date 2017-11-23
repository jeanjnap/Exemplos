import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Login from './Login';

export default class Cont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 3,
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
  	var n = this.state.val;
  	n-=1;
    this.setState({
      val: n,
     });
  }

  render() {
  	var v = this.state.val

  	var text='';

    var TelaAtual = <View style={styles.container}><Text>Trocando de tela em: {this.state.val}.</Text></View>


  	if(v<=0)
  		TelaAtual = <Login/>;

    return ( 
        TelaAtual

    );
  }
}
///
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60',
    padding: 10,
  },

});

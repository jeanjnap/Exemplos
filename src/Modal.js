import React, { Component } from 'react';
import { 
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Button,
 } from 'react-native';
import Modal from 'react-native-modal';


export default class Example extends Component {
  state = {
    visibleModal: null,
  };

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Texto do Modal</Text>
        <TouchableOpacity onPress={ ()=> this.setState({visibleModal: 2})}>
            <View style={styles.button}>
                <Text style={{color: 'white',fontWeight: 'bold'}}>Ir para o segundo Modal</Text>
            </View>
        </TouchableOpacity>
    </View>
  );

  _renderModalContent2 = () => (
    <View style={styles.modalContent}>
      <Text>Segundo Modal</Text>
        <TouchableOpacity onPress={ ()=> this.setState({visibleModal: null})}>
            <View style={styles.button}>
                <Text style={{color: 'white',fontWeight: 'bold'}}>Fechar Modal</Text>
            </View>
        </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a elit ac velit suscipit posuere feugiat in lacus. Donec consequat mauris id augue dictum, non tincidunt purus malesuada. Fusce commodo erat lectus. Praesent molestie libero ac erat dignissim, vitae pellentesque libero tempus. Proin egestas eget tortor ut vulputate. Sed aliquam ex et tortor aliquam tempus. Cras varius commodo vestibulum. Donec vel sagittis eros. Cras eu diam sagittis, finibus eros eget, suscipit tellus. Donec ultricies mi mauris, id sodales urna aliquet eget. Sed ultrices, lorem sed scelerisque pulvinar, urna mi laoreet lectus, sit amet pharetra enim libero eu felis. Curabitur est leo, fringilla vel erat eu, ornare finibus dui. Morbi id egestas risus. Nullam porta faucibus dolor, in blandit libero. Pellentesque at gravida ligula. Maecenas eget egestas augue.

            Cras nisl turpis, laoreet eu faucibus volutpat, vulputate in sem. Cras vitae diam enim. Nulla facilisi. Vivamus pulvinar quis metus ut sollicitudin. Morbi rhoncus efficitur tellus eu interdum. Morbi quis faucibus diam, et ultricies sapien. In pharetra justo metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pellentesque mi vel nisl mattis ultricies. Donec aliquet urna sed tellus porta sagittis. Praesent tortor sem, varius sed ipsum vel, vehicula maximus massa.

            Sed ac consectetur sapien, a facilisis sapien. Curabitur id sodales eros, at cursus lacus. Vivamus ac felis feugiat, fringilla ex nec, pulvinar metus. Phasellus volutpat lorem mauris, ac lacinia quam lobortis a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam euismod sapien rutrum orci malesuada, sed efficitur nunc congue. Ut nec enim condimentum, tincidunt metus eleifend, vehicula justo. Maecenas consequat molestie quam ut finibus. Mauris et molestie nulla, vel placerat quam. Etiam et finibus sapien. Nam ante dolor, pharetra laoreet pellentesque et, molestie at lectus.
        </Text>
        <TouchableOpacity onPress={()=> this.setState({visibleModal: 1})}>
            <View style={styles.button}>
                <Text style={{color: 'white',fontWeight: 'bold'}}>Abrir modal</Text>
            </View>
        </TouchableOpacity>
        <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent()}</Modal>

        <Modal isVisible={this.state.visibleModal === 2}>{this._renderModalContent2()}</Modal>
        
      </View>
    );
  }
}




const styles =  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#3498db',
      padding: 12,
      margin: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
  });
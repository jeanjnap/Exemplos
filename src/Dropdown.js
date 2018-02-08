import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Button,
} from 'react-native';

import Icon1 from 'react-native-vector-icons/dist/FontAwesome';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers,
} from 'react-native-popup-menu';

const { Popover } = renderers;

import Icon from 'react-native-vector-icons/FontAwesome';




export default class Example extends Component {
    constructor() {
        super()

        this.state = {
            indice: ""
        }
    }


    render() {
        return (
            <MenuProvider style={{ flexDirection: 'column', padding: 30 }}>
                <Text>Valor Selecionado: {this.state.indice}</Text>
                <Menu
                    onSelect={value => this.setState({ indice: value })}
                    renderer={renderers.ContextMenu}>

                    <MenuTrigger style={{ width: 5, alignItems: 'center'}} >
                        <Icon name="ellipsis-v" size={20} color="gray"/>
                    </MenuTrigger>

                    <MenuOptions >
                        <MenuOption value='valor1' text='valor1' />
                        <MenuOption value='valor2' text='valor2' />
                        <MenuOption value='valor3' text='valor3' />
                    </MenuOptions>
                </Menu>
            </MenuProvider>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
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

});
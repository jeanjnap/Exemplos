import React, { Component } from 'react';
import {
  View
} from 'react-native';

import Contador from './src/DrawerNavigator'

export default class Clock extends React.Component {

  render() {
    return (
      <Contador/>
    );
  }
}
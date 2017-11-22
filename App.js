import React, { Component } from 'react';
import {
  View
} from 'react-native';

import Contador from './src/Contador'

export default class Clock extends React.Component {

  render() {
    return (
      <Contador/>
    );
  }
}
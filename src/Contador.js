import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';


export default class Cont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
      val: 0,
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
  	var n = this.state.val;
  	n+=1;
    this.setState({
      time: new Date().toLocaleString(),
      val: n,
     });
  }

  render() {
  	var v = this.state.val

  	var text='';

  	if(v>9)
  		text = "Passaram 10 segs."

    return (
      <View><Text>
        The time is {this.state.time}.
        </Text>
        <Text>{v} {'\n'} {text}
        </Text>
      </View>
    );
  }
}
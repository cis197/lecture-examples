import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native'


const style = {
  container: {
    flexGrow: 1,
    width: '33%',
    height: 80,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
  },
  txt: {
    fontSize: 40,
    width: '100%',
    textAlign: 'center'
  }
}
class Cell extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <TouchableHighlight 
        style={style.container}
        onPress={() => this.props.cellClick(this.props.id)}>
        <View style={{ justifyContent: 'center', height: '100%' }}> 
          <Text 
          style={style.txt}>
          {this.props.text}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default Cell;

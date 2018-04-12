import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import Cell from './Cell';

const styles = {
  container: {
    display: 'flex',
    width: '80%',
    margin: 'auto',
    flexWrap: 'wrap', 
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    textAlign: 'center'
  },
  info: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20
  }
}
class Board extends Component {

  constructor() {
    super()
  }

  render() {
    let cells = this.props.cells.map((i, idx) => {
      return <Cell cellClick={this.props.cellClick} id={idx} text={i} key={idx}/>
    })
    return  (
      <View>
        <Text style={styles.header}>Tic Tac Toe!</Text>
        <View style={styles.container}>{cells}</View>
        <Text style={styles.info}>Current Move is  { this.props.player }</Text>
        { this.props.winner ? 
          <Text style={styles.info}>Current winner is  { this.props.winner }</Text>
          : '' 
        }
        <Button title='reset'
                onPress={this.props.reset}
        />
      </View>
    )
  }

}


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    cellClick: (id) => dispatch({ type: 'MOVE', idx: id }),
    reset: () => dispatch({ type: 'RESET' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Board);

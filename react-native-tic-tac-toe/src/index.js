import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, View } from 'react-native';
import checkWinState from './checkWinState';
import Board  from './Board';

const initState = { 
  cells: new Array(9).fill(''),
  player: 'X',
  winner: null
}
const reducer = function(state=initState, action) {
  switch(action.type) {
    case 'MOVE':
      if (!state.winner && state.cells[action.idx] === '') {
        var tempArray = [...state.cells];
        tempArray[action.idx] = state.player;

        return { 
          cells: tempArray, 
          player: state.player === 'X' ? 'O' : 'X',
          winner: checkWinState(tempArray)
        }
      } else {
        return state
      }
    case 'RESET': 
      return initState;
    default:
      return state;
  }
}

const store = createStore(reducer);

class Main extends React.Component { 
  constructor() {
    super()
  }

  render() {
    return (
      <Provider store={store}>
        <Board/>
      </Provider>
    )
  }
}

export default Main;

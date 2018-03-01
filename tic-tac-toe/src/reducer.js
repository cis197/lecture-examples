import winner from './winner';
import initialState from './initialState';

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState
    case 'CELL_CLICK':
      if (!state.cells[action.id] && !state.winner) {
        let s = Object.assign({}, state, {
          cells: [...state.cells.slice(0, action.id), state.player, ...state.cells.slice(action.id + 1)],
          history: [...state.history, `${state.player} moved at ${action.id}`],
          player: state.player === 'X' ? 'O' : 'X',
        })
        s.winner = winner(s.cells)
        return s;
      } else {
        return state
      }
    default:
      return state
  }
}

export default boardReducer;

import winner from '../helpers/winner';
import initialState from '../constants/initialState';

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState
    case 'CELL_CLICK':
      if (!state.cells[action.id] && !state.winner) {
        let s = Object.assign({}, state, {
          cells: [...state.cells.slice(0, action.id), state.player, ...state.cells.slice(action.id + 1)],
          history: [...state.history, `${state.player} placed at ${action.id}. Time  elapsed: ${state.elapsed} seconds`],
          player: state.player === 'X' ? 'O' : 'X',
        })
        s.winner = winner(s.cells)
        return s;
      } else {
        return state
      }
    case 'TICK':
      return Object.assign({}, state, { elapsed: state.winner ? state.elapsed : state.elapsed + 1 })
    default:
      return state
  }
}

export default boardReducer;

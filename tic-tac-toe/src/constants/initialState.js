const initialState = {
  cells: new Array(9).fill(null),
  player: 'X',
  winner: null,
  history: [],
  elapsed: 0
}

export default initialState;

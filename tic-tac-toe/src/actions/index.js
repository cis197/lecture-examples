const reset = () => {
  return {
    type: 'RESET',
  }
}

const cellClick = (id) => {
  return {
    type: 'CELL_CLICK',
    id: id
  }
}

const tick = () => {
  return {
    type: 'TICK',
  }
}

export { reset, cellClick, tick }

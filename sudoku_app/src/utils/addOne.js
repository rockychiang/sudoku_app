export default function addOne(board) {
  return board.map(i => {
    return i !== null ? i+1 : ""
  })
}

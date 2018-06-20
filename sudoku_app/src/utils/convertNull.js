export default function convertNull(board) {
  return board.map(i => {
    if (i === null) {
      return ""
    } else if (i === "") {
      return null
    } else {
      return i
    }
  })
}

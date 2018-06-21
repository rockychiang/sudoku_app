export function getLeaderboard() {
  return (dispatch) => {
    return fetch('/api/v1/games')
      .then(response => response.json())
      .then(leaderboard => { dispatch({ type: 'GET_LEADERBOARD', leaderboard }) })
  }
}

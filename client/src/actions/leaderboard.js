export function getLeaderboard() {
  return (dispatch) => {
    return fetch('/api/leaderboard')
      .then(response => response.json())
      .then(leaderboard => { dispatch({ type: 'GET_LEADERBOARD', leaderboard }) })
  }
}

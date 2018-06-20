export function getLeaderboard() {
  return (dispatch) => {
    return fetch('leaderboard')
      .then(response => response.json())
      .then(leaderboard => { dispatch({ type: 'GET_LEADERBOARD', leaderboard }) })
  }
}

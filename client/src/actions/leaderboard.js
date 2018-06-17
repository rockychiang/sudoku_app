export function getLeaderboard() {
  const leaderboard = [
    { user: { name: "K3" }, timer: { time: 300 } },
    { user: { name: "Kinan" }, timer: { time: 500 } },
    { user: { name: "K3" }, timer: { time: 800 } },
    { user: { name: "Cael" }, timer: { time: 1000 } },
    { user: { name: "Thal" }, timer: { time: 1200 } },
    { user: { name: "Cael" }, timer: { time: 1500 } },
    { user: { name: "Thal" }, timer: { time: 1600 } },
    { user: { name: "Kinan" }, timer: { time: 1700 } },
    { user: { name: "Cyll" }, timer: { time: 1800 } },
    { user: { name: "Lynn" }, timer: { time: 5000 } }
  ]

  return {
    type: 'GET_LEADERBOARD',
    leaderboard
  }
}

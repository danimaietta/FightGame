const LIFE_POINTS = 1000

const initalState = {
  player1: {
    lifePoints: LIFE_POINTS,
    action: 'Idle',
    turn: true
  },
  player2: {
    lifePoints: LIFE_POINTS,
    action: 'Idle',
    turn: true
  }
}

const statusReducer = (state = initalState, action) => {
  const { type, damage } = action
  console.log(action)
  switch (type) {
    case 'IDLE':
      return {
        player1: {
          lifePoints: state.player1.lifePoints,
          action: 'Idle',
          turn: state.player1.turn
        },
        player2: {
          lifePoints: state.player2.lifePoints,
          action: 'Idle',
          turn: state.player2.turn
        }
      }
    case 'ATTACK_P1':
      return {
        player1: {
          lifePoints: state.player1.lifePoints,
          action: 'Attack',
          turn: false
        },
        player2: {
          lifePoints: state.player2.lifePoints - damage,
          action: 'Dead',
          turn: true
        }
      }
    case 'ATTACK_P2':
      return {
        player1: {
          lifePoints: state.player1.lifePoints - damage,
          action: 'Dead',
          turn: true
        },
        player2: {
          lifePoints: state.player2.lifePoints,
          action: 'Attack',
          turn: false
        }
      }
    default:
      return state
  }
}

export default statusReducer

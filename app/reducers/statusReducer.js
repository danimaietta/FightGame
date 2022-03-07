const LIFE_POINTS = 1000

const initalState = {
  player1: {
    lifePoints: LIFE_POINTS,
    action: "Idle",
    turn: true,
    armour: 10,
    evation: 10,
    specialAttack: 0
  },
  player2: {
    lifePoints: LIFE_POINTS,
    action: "Idle",
    turn: true,
    armour: 10,
    evation: 10,
    specialAttack: 0
  },
  message: "Fight!"
}

const statusReducer = (state = initalState, action) => {
  const { type, damage, plus, evationPlus } = action
  console.log(action)
  switch (type) {
    case "IDLE":
      return {
        player1: {
          lifePoints: state.player1.lifePoints,
          action: "Idle",
          turn: state.player1.turn,
          armour: state.player1.armour,
          evation: state.player1.evation,
          specialAttack: 0
        },
        player2: {
          lifePoints: state.player2.lifePoints,
          action: "Idle",
          turn: state.player2.turn,
          armour: state.player2.armour,
          evation: state.player2.evation,
          specialAttack: 0
        },
        message: " "
      }
    case "ATTACK_P1":
      if (Math.random() * 100 > state.player2.evation) {
        return {
          player1: {
            lifePoints: state.player1.lifePoints,
            action: "Attack",
            turn: false,
            armour: state.player1.armour,
            evation: state.player1.evation,
            specialAttack: 0
          },
          player2: {
            lifePoints: state.player2.lifePoints - damage + state.player2.armour,
            action: "Dead",
            turn: true,
            armour: state.player2.armour,
            evation: state.player2.evation,
            specialAttack: 0
          },
          message: "Player 1 Attacking!"
        }
      } else {
        return {
          player1: {
            lifePoints: state.player1.lifePoints,
            action: "Attack",
            turn: false,
            armour: state.player1.armour,
            evation: state.player1.evation,
            specialAttack: 0
          },
          player2: {
            lifePoints: state.player2.lifePoints,
            action: "Jump",
            turn: true,
            armour: state.player2.armour,
            evation: state.player2.evation,
            specialAttack: 0
          },
          message: "Player 1 Miss!"
        }
      }

    case "ATTACK_P2":
      if (Math.random() * 100 > state.player1.evation) {
        return {
          player1: {
            lifePoints: state.player1.lifePoints - damage + state.player1.armour,
            action: "Dead",
            turn: true,
            armour: state.player1.armour,
            evation: state.player1.evation,
            specialAttack: 0
          },
          player2: {
            lifePoints: state.player2.lifePoints,
            action: "Attack",
            turn: false,
            armour: state.player2.armour,
            evation: state.player2.evation,
            specialAttack: 0
          },
          message: "Player 2 Attacking!"
        }
      } else {
        return {
          player1: {
            lifePoints: state.player1.lifePoints,
            action: "Jump",
            turn: true,
            armour: state.player1.armour,
            evation: state.player1.evation,
            specialAttack: 0
          },
          player2: {
            lifePoints: state.player2.lifePoints,
            action: "Attack",
            turn: false,
            armour: state.player2.armour,
            evation: state.player2.evation,
            specialAttack: 0
          },
          message: "Player 2 Miss!"
        }
      }
    case "DEAD_P1":
      return {
        player1: {
          lifePoints: state.player1.lifePoints,
          action: "Dead",
          turn: false,
          armour: state.player1.armour,
          evation: state.player1.evation,
          specialAttack: 0
        },
        player2: {
          lifePoints: state.player2.lifePoints,
          action: "Jump",
          turn: false,
          armour: state.player2.armour,
          evation: state.player2.evation,
          specialAttack: 0
        },
        message: "Player 2 Wins!"
      }
    case "DEAD_P2":
      return {
        player1: {
          lifePoints: state.player1.lifePoints,
          action: "Jump",
          turn: false,
          armour: state.player1.armour,
          evation: state.player1.evation,
          specialAttack: 0
        },
        player2: {
          lifePoints: state.player2.lifePoints,
          action: "Dead",
          turn: false,
          armour: state.player2.armour,
          evation: state.player2.evation,
          specialAttack: 0
        },
        message: "Player 1 Wins!"
      }
    case "ARMOUR_P1":
      return {
        player1: {
          lifePoints: state.player1.lifePoints,
          action: "Jump",
          turn: false,
          armour: state.player1.armour + plus,
          evation: state.player1.evation,
          specialAttack: 0
        },
        player2: {
          lifePoints: state.player2.lifePoints,
          action: "Idle",
          turn: true,
          armour: state.player2.armour,
          evation: state.player2.evation,
          specialAttack: 0
        },
        message: "Player 1 Armour Up +"
      }
    case "ARMOUR_P2":
      return {
        player1: {
          lifePoints: state.player1.lifePoints,
          action: "Idle",
          turn: true,
          armour: state.player1.armour,
          evation: state.player1.evation,
          specialAttack: 0
        },
        player2: {
          lifePoints: state.player2.lifePoints,
          action: "Jump",
          turn: false,
          armour: state.player2.armour + plus,
          evation: state.player2.evation,
          specialAttack: 0
        },
        message: "Player 2 Armour Up +"
      }
    case "EVATION_P1":
      return {
        player1: {
          lifePoints: state.player1.lifePoints,
          action: "Jump",
          turn: false,
          armour: state.player1.armour,
          evation: state.player1.evation + evationPlus,
          specialAttack: 0
        },
        player2: {
          lifePoints: state.player2.lifePoints,
          action: "Idle",
          turn: true,
          armour: state.player2.armour,
          evation: state.player2.evation,
          specialAttack: 0
        },
        message: "Player 1 Evation Up +"
      }
    case "EVATION_P2":
      return {
        player1: {
          lifePoints: state.player1.lifePoints,
          action: "Idle",
          turn: true,
          armour: state.player1.armour,
          evation: state.player1.evation,
          specialAttack: 0
        },
        player2: {
          lifePoints: state.player2.lifePoints,
          action: "Jump",
          turn: false,
          armour: state.player2.armour,
          evation: state.player2.evation + evationPlus,
          specialAttack: 0
        },
        message: "Player 2 Evation Up +"
      }
    default:
      return state
  }
}

export default statusReducer

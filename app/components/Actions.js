import React, { useRef, useEffect } from 'react'
import { FaHandRock, FaBattleNet } from 'react-icons/fa'
import StatusContext from '../contexts/status'

function Actions({ player, playerAffected, updateStatus }) {
  const status = React.useContext(StatusContext)
  const myTurn = player === 'player1' ? status.player1.turn : status.player2.turn
  console.log('myTurn', myTurn)
  const myClick = myTurn ? 'yesClick' : 'noClick'

  console.log(player, playerAffected)

  const attack = () => {
    if (myTurn) {
      const newStatus = {
        [player]: {
          lifePoints:
            player === 'player1' ? status.player1.lifePoints : status.player2.lifePoints,
          action: 'Attack',
          turn: myTurn
        },
        [playerAffected]: {
          lifePoints:
            playerAffected === 'player2'
              ? status.player2.lifePoints - 100
              : status.player1.lifePoints - 100,
          action: 'Dead',
          turn: myTurn
        }
      }
      console.log('newStatus', newStatus)
      updateStatus(newStatus)
    } else {
      console.log('this is not my turn')
    }
  }

  return (
    <div className={`action-container ${myClick}`}>
      <FaHandRock onClick={() => attack()} size='2em' />
      <FaBattleNet size='2em' />
    </div>
  )
}

export default React.memo(Actions)

// FaKhanda, FaJedi, FaMagic, FaSeedling, FaStreetView, FaSyringe, FaSith
// FaBattleNet, FaSkull, FaSubscript, FaHandRock,
// FaRegHandPointRight, FaRegHandPointLeft

import React, { useRef, useEffect } from 'react'
import { FaHandRock, FaBattleNet } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

function Actions({ player }) {
  const status = useSelector(status => status)
  const myTurn = player === 'player1' ? status.player1.turn : status.player2.turn
  const myClick = myTurn ? 'yesClick' : 'noClick'
  const dispatch = useDispatch()

  const attack = () => {
    if (myTurn) {
      if (player === 'player1') {
        dispatch({ type: 'ATTACK_P1', damage: 100 })
      } else {
        dispatch({ type: 'ATTACK_P2', damage: 100 })
      }
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

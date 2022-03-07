import React, { useRef, useEffect } from "react"
import { FaHandRock, FaBattleNet, FaKhanda } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"

function Actions({ player }) {
  const status = useSelector(status => status)
  const myTurn = player === "player1" ? status.player1.turn : status.player2.turn
  const myClick = myTurn ? "yesClick" : "noClick"
  const dispatch = useDispatch()

  const attack = () => {
    if (myTurn) {
      if (player === "player1") {
        dispatch({ type: "ATTACK_P1", damage: 100 })
      } else {
        dispatch({ type: "ATTACK_P2", damage: 100 })
      }
    } else {
      console.log("this is not my turn")
    }
  }

  const armourUp = () => {
    if (myTurn) {
      if (player === "player1") {
        dispatch({ type: "ARMOUR_P1", plus: 20 })
      } else {
        dispatch({ type: "ARMOUR_P2", plus: 20 })
      }
    } else {
      console.log("this is not my turn")
    }
  }

  const evationUp = () => {
    if (myTurn) {
      if (player === "player1") {
        dispatch({ type: "EVATION_P1", evationPlus: 10 })
      } else {
        dispatch({ type: "EVATION_P2", evationPlus: 10 })
      }
    } else {
      console.log("this is not my turn")
    }
  }

  return (
    <div className={`action-container ${myClick}`}>
      <div className='tooltip'>
        <span className='tooltiptext'>Attack 100 damage</span>
        <FaHandRock onClick={() => attack()} size='2em' />
      </div>
      <div className='tooltip'>
        <span className='tooltiptext'>+ 20 armour (50 limit)</span>
        <FaKhanda onClick={() => armourUp()} size='2em' />
      </div>
      <div className='tooltip'>
        <span className='tooltiptext'>+ 10% evation (50% limit)</span>
        <FaBattleNet onClick={() => evationUp()} size='2em' />
      </div>
    </div>
  )
}

export default React.memo(Actions)

// FaKhanda, FaJedi, FaMagic, FaSeedling, FaStreetView, FaSyringe, FaSith
// FaBattleNet, FaSkull, FaSubscript, FaHandRock,
// FaRegHandPointRight, FaRegHandPointLeft

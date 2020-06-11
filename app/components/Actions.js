import React from 'react'
import { FaHandRock, FaBattleNet } from 'react-icons/fa';
import StatusContext  from '../contexts/status'

function Actions({ player, playerAffected, updateStatus }){

    const status = React.useContext(StatusContext)

    const attack = () => {
        console.log(status.player2.lifePoints - 100)
        updateStatus({
            [player]: {
                lifePoints: (player === 'player1' ? status.player1.lifePoints : status.player2.lifePoints),
                action: 'Attack'
            },
            [playerAffected]: {
                lifePoints: (playerAffected === 'player1' ? status.player2.lifePoints - 100 : status.player1.lifePoints - 100),
                action: 'Dead'
            }
        })
    }

    return (
        <div className="action-container">
            <FaHandRock 
                onClick={() => attack()}
                size='2em'
            />
            <FaBattleNet size='2em' />
        </div>
    )
}

export default React.memo(Actions, (prevProps, nextProps) => {
    return prevProps.player === nextProps.player
})

// FaKhanda, FaJedi, FaMagic, FaSeedling, FaStreetView, FaSyringe, FaSith 
// FaBattleNet, FaSkull, FaSubscript, FaHandRock, 
// FaRegHandPointRight, FaRegHandPointLeft
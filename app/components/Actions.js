import React from 'react'
import { FaHandRock, FaBattleNet } from 'react-icons/fa';

function Actions({ attack }){

    const [frame, setFrame] = React.useState(1)

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
    return prevProps.attack === nextProps.attack
})

// FaKhanda, FaJedi, FaMagic, FaSeedling, FaStreetView, FaSyringe, FaSith 
// FaBattleNet, FaSkull, FaSubscript, FaHandRock, 
// FaRegHandPointRight, FaRegHandPointLeft
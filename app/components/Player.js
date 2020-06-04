import React from 'react'
import Fighter from './Fighter'
import HealthBar from './HealthBar'
import Actions from './Actions'

export default function Player({ numPlayer, type, lifePoints, doAction}){

    const [action, setAction] = React.useState('Idle')

    return (
        <>
            <HealthBar 
                lifePoints={lifePoints} 
                action={action}
            />
            <Fighter 
                type={type} 
                player={numPlayer} 
                action={action} 
                changeAction={(action) => setAction(action)}
            />
            <Actions 
                attack={ () => {
                        doAction('Attack')
                        setAction('Attack')
                    }   
                } 
            />
        </>
    )
}
import React from 'react'
import StatusContext  from '../contexts/status'

export default function Fighter({ player = 'player1', type = 'knight', action = 'Idle', updateStatus }){

    const status = React.useContext(StatusContext)

    const [frame, setFrame] = React.useState(1)

    const framesByType = () => {
        if(action === 'Idle'){
            return 10
        } else if(action === 'Dead'){
            return 4
        }else if(action === 'Attack' && type === 'adventuress'){
            return 6
        }else if(action === 'Attack' && type === 'knight'){
            return 6
        }else{
            console.log('no pense que hubiera un else')
        }
    }

    React.useEffect(() => {
        const id = window.setTimeout(() => {
            try{
                //console.log(`framesByType: ${framesByType()}`)
                if(frame < framesByType()){
                    setFrame((f) => f + 1)
                } else {
                    console.log(`${frame} ${action}`)
                    setFrame(1)
                    if(action !== 'Idle') {
                        updateStatus({
                            player1: {
                                lifePoints: status.player1.lifePoints,
                                action: 'Idle'
                            },
                            player2: {
                                lifePoints: status.player2.lifePoints,
                                action: 'Idle'
                            }  
                        })
                    }
                }
            }catch(error){
                console.error('Error in Fighter:', error)
                console.log('Error in frame: ', frame)
            }
        }, (action === 'Dead' ? 600 : 80))  
        return () => {
            if(frame == framesByType()) {
                setFrame(1)
            }
            window.clearTimeout(id)
        }
    }, [frame])

    return (
        <>
            <p className="center">{type}</p>
            <img
                className={player === 'player2' ? "flip-x" : ""}
                src={require(`../sprites/${type}/${action} (${frame}).png`).default}
                alt={`not found`}
                width="400px"
                height="500px"
            />
        </>
    )
}
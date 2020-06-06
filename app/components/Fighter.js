import React from 'react'

export default function Fighter({ player = 1, type = 'knight', action = 'Idle', changeAction, takeDamage }){

    const [frame, setFrame] = React.useState(1)
 
    const getFrameByAction = () => {
        if(takeDamage == true){
            changeAction('Dead')
            return 3
        } else if(action === 'Attack' && type === 'adventuress'){
            return 7
        }else{
            return 10
        }    
    }

    React.useEffect(() => {
        const id = window.setTimeout(() => {
            try{
                if(frame !== getFrameByAction()){
                    setFrame((f) => f + 1)
                }else{
                    changeAction('Idle')
                    setFrame(1)
                }
            }catch(error){
                console.error('Error in Fighter: ', error)
            }
        }, 90)  
        return () => window.clearTimeout(id)
    }, [frame])

    return (
        <>
            <p className="center">{type}</p>
            <img
                className={player === 2 ? "flip-x" : ""}
                src={require(`../sprites/${type}/${action} (${frame}).png`).default}
                alt={`not found`}
                width="400px"
                height="500px"
            />
        </>
    )
}
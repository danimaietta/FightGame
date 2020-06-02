import React from 'react'

export default function Fighter({ player = 1, type = 'knight', action = 'Idle', changeAction }){

    const [frame, setFrame] = React.useState(1)
 
    React.useEffect(() => {
        const id = window.setTimeout(() => {
            if(frame !== 10){
                setFrame((f) => f + 1)
            }else{
                changeAction('Idle')
                setFrame(1)
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
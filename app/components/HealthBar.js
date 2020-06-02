import React from 'react'

export default function HealthBar({ lifePoints, damage = 100, action = 'Idle' }){

    const TOTAL_BAR = 250
    const [life, setLife] = React.useState(lifePoints)

    console.count('HealthBar - action', action)
 
    React.useEffect(() => {
        if(action === 'Attack'){
            const lifeLeft = (life - damage)
            const id = window.setTimeout(() => {
                (life !== lifeLeft) && setLife((l) => l - damage) // setLife((l) => l - 5)
            }, 100)
            return () => window.clearTimeout(id)
        }
       /* if(action === 'Attack'){
            setLife((l) => l - damage)
        }*/
    }, [action])

    const percentage = (life) => TOTAL_BAR * life / lifePoints

    return (
        <div className="bar" style={{width:TOTAL_BAR}} >
            <div className="center solid-white green" style={{width:percentage(life)}}>
                {life}
            </div>
        </div>
    )
}

/*
    Still pending on make to useCallback()
*/
/*export default React.memo(HealthBar, (prevProps, nextProps) => {
    return prevProps.damage === nextProps.damage
})*/
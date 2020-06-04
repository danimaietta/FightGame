import React from 'react'

export default function HealthBar({ lifePoints, damage = 100, action = 'Idle'}){

    const TOTAL_BAR = 250
    const [life, setLife] = React.useState(() => lifePoints)
 
    React.useEffect(() => {
        const id = window.setTimeout(() => {
            if(lifePoints !== life){
                setLife((l) => l - 5)
            }
        }, 150)
        return () => window.clearTimeout(id)   
    }, [lifePoints, life])

    const percentage = (life) => TOTAL_BAR * life /  1000

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
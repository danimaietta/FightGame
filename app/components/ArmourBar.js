import React from "react"

function HealthBar({ armourPoints }) {
  const TOTAL_BAR = 250
  const [armour, setArmour] = React.useState(() => armourPoints)

  React.useEffect(() => {
    const id = window.setTimeout(() => {
      if (armourPoints !== armour) {
        setArmour(l => l + 1)
      }
    }, 100)
    return () => window.clearTimeout(id)
  }, [armourPoints, armour])

  const percentage = armour => (TOTAL_BAR * armour) / 50

  return (
    <div className='bar' style={{ width: TOTAL_BAR }}>
      <div className='center solid-white blue' style={{ width: percentage(armour) }}>
        {armour}
      </div>
    </div>
  )
}

export default React.memo(HealthBar)

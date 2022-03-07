import React from "react"

function EvationBar({ evationPoints }) {
  const TOTAL_BAR = 250
  const [evation, setEvation] = React.useState(() => evationPoints)

  React.useEffect(() => {
    const id = window.setTimeout(() => {
      if (evationPoints !== evation) {
        setEvation(l => l + 1)
      }
    }, 100)
    return () => window.clearTimeout(id)
  }, [evationPoints, evation])

  const percentage = evation => (TOTAL_BAR * evation) / 50

  return (
    <div className='bar space' style={{ width: TOTAL_BAR }}>
      <div className='center solid-white yellow' style={{ width: percentage(evation) }}>
        {evation}
      </div>
    </div>
  )
}

export default React.memo(EvationBar)

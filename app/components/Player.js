import React from 'react'

function Player({ position, children }) {
  return <div className={position}>{children}</div>
}

export default React.memo(Player)

import React from 'react'

export default function Player({ position, children }){

    return (
        <div className={position}>
            {children}
        </div>
    )
}
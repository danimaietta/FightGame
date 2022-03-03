import React from 'react'

export default function FunctionFather() {
  return (
    <div className='container95'>
      <h1 className='align-center margin0'>404 Not Found</h1>
      <p className='align-center'>
        Click
        <a className='blue' onClick={() => window.location.replace('./FightGame')}>
          here
        </a>
        to return to the homepage
      </p>
    </div>
  )
}

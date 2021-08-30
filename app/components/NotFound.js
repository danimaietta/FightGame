import React from 'react'

export default function FunctionFather() {
  return (
    <div className='container95 align-center'>
      <h1 className=' margin0'>404 Not Found</h1>
      Click
      <a className='blue' onClick={() => window.location.replace('./FightGame')}>
        {' '}
        here{' '}
      </a>
      to return to the homepage
    </div>
  )
}

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Player from './components/Player'
import Sound from 'react-sound'
import soundfile, { soundManager } from './audio/soundtrack.mp3'

function App() { 

  window.soundManager.setup({ debugMode: false }) // No console.logs from <Sound />

  const LIFE_POINTS = 1000
  const [LP1, setLP1] = React.useState(LIFE_POINTS)
  const [LP2, setLP2] = React.useState(LIFE_POINTS)

  const [takeDamage1, setTakeDamage1] =  React.useState(false)
  const [takeDamage2, setTakeDamage2] =  React.useState(false)

  const dealDamage = (action, player) =>{
      if(action !== 'Idle'){
        if(player === 1){
          setLP2((l) => l - damageByAction(action))
          setTakeDamage2(true)
        }else{
          setLP1((l) => l - damageByAction(action))
          setTakeDamage1(true)
        }
      }else{
        setTakeDamage2(false)
        setTakeDamage1(false)
      }
    }
    

  const damageByAction = (action) => {
    if(action === 'Attack') {
      return 100
    }else{
      return 50
    }
  }

  return (
    <>
      <Sound url={soundfile} playStatus={Sound.status.PAUSED} volume={5} />
      <div className="flex">
        <div className="start">
          <Player 
            lifePoints={LP1} 
            numPlayer={1}
            type='knight' 
            doAction={(action) => dealDamage(action, 1)} 
            takeDamage={takeDamage1}
          />
        </div>
        <div className="end">
          <Player 
            lifePoints={LP2} 
            numPlayer={2} 
            type='adventuress' 
            doAction={(action) => dealDamage(action, 2)}
            takeDamage={takeDamage2}
          />
        </div>
      </div>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

/* "./audio/08 BGM - Whoa I'm In Space Cuba.mp3".default */

/*
  PLAYING
  PAUSED
  STOPPED
*/

/*
  All imgs tooked from https://www.gameart2d.com.html
*/
 
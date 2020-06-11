import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Player from './components/Player'
import Fighter from './components/Fighter'
import HealthBar from './components/HealthBar'
import Actions from './components/Actions'
import Sound from 'react-sound'
import { StatusProvider } from './contexts/status'
import soundfile, { soundManager } from './audio/soundtrack.mp3'

function App() { 

  // Initial setup
  window.soundManager.setup({ debugMode: false }) // No console.logs from <Sound />
  const LIFE_POINTS = 1000

  const [status, setStatus] = React.useState(
    {
      player1: {
        lifePoints: LIFE_POINTS,
        action: 'Idle'
      },
      player2: {
        lifePoints: LIFE_POINTS,
        action: 'Idle'
      }
    }
  )

  const updateStatus = (newStatus) => setStatus(newStatus)

  return (
    <StatusProvider value={status}>
      <Sound url={soundfile} playStatus={Sound.status.PAUSED} volume={5} />
      <div className="flex">
        <Player position="start">
          <HealthBar lifePoints={status.player1.lifePoints} />
          <Fighter 
            type='knight' 
            player='player1' 
            action={status.player1.action} 
            updateStatus={updateStatus}
          />
          <Actions 
            player='player1'
            playerAffected='player2'
            updateStatus={updateStatus}
          />
        </Player>
        <Player position="end">
          <HealthBar lifePoints={status.player2.lifePoints} />
          <Fighter 
            type='adventuress' 
            player='player2'
            action={status.player2.action}
            updateStatus={updateStatus}
          />
          <Actions 
            player='player2'
            playerAffected='player1'
            updateStatus={updateStatus}
          />
        </Player>
      </div>
    </StatusProvider>
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
 
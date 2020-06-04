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

  const applyAction = (action) => {
    switch(action) {
      case 'Attack':
          setLP2((l) => l - 100)
        break;
      default:
        console.log('Default')
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
            doAction={(action) => applyAction(action)} // setLP2((l) => l - 100)
          />
        </div>
        <div className="end">
          <Player 
            lifePoints={LP2} 
            numPlayer={2} 
            type='adventuress' 
            doAction={() => setLP1((l) => l - 100)}  
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
 
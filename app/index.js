import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Player from './components/Player'
import Sound from 'react-sound'
import soundfile, { soundManager } from './audio/soundtrack.mp3'

function App() { 

  window.soundManager.setup({ debugMode: false }) // No console.logs from <Sound/>

  const LIFE_POINTS = 1000
  const [lifePoints, setLifePoints] = React.useState(LIFE_POINTS)

  return (
    <>
      <Sound url={soundfile} playStatus={Sound.status.PAUSED} volume={5} />
      <div className="flex">
        <div className="start">
          <Player lifePoints={lifePoints} numPlayer={1} type='knight' />
        </div>
        <div className="end">
          <Player lifePoints={lifePoints} numPlayer={2} type='adventuress' />
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
 
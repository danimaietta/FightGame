import React, { useCallback } from 'react'
import Player from './Player'
import Fighter from './Fighter'
import HealthBar from './HealthBar'
import MemoActions from './Actions'
import Sound from 'react-sound'
import { StatusProvider } from '../contexts/status'
import soundfile, { soundManager } from '../audio/soundtrack.mp3'

export default function Game() {
  // Initial setup
  window.soundManager.setup({ debugMode: false }) // No console.logs from <Sound />
  const LIFE_POINTS = 1000

  const [status, setStatus] = React.useState(() => ({
    player1: {
      lifePoints: LIFE_POINTS,
      action: 'Idle',
      turn: true
    },
    player2: {
      lifePoints: LIFE_POINTS,
      action: 'Idle',
      turn: false
    }
  }))

  console.table(status, ['lifePoints', 'action', 'turn'])

  const updateStatus = useCallback(newStatus => setStatus(newStatus))

  return (
    <StatusProvider value={status}>
      <Sound url={soundfile} playStatus={Sound.status.PAUSED} volume={5} />
      <div className='flex align-center'>
        <Player position='start'>
          <HealthBar lifePoints={status.player1.lifePoints} />
          <Fighter
            type='knight'
            player='player1'
            action={status.player1.action}
            updateStatus={updateStatus}
          />
          <MemoActions
            player='player1'
            playerAffected='player2'
            updateStatus={updateStatus}
          />
        </Player>
        <Player position='end'>
          <HealthBar lifePoints={status.player2.lifePoints} />
          <Fighter
            type='adventuress'
            player='player2'
            action={status.player2.action}
            updateStatus={updateStatus}
          />
          <MemoActions
            player='player2'
            playerAffected='player1'
            updateStatus={updateStatus}
          />
        </Player>
      </div>
    </StatusProvider>
  )
}

/* "./audio/08 BGM - Whoa I'm In Space Cuba.mp3".default */

/*
Sound.status.
  PLAYING
  PAUSED
  STOPPED
*/

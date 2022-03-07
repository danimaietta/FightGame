import React, { useCallback } from "react"
import Player from "./Player"
import Fighter from "./Fighter"
import HealthBar from "./HealthBar"
import ArmourBar from "./ArmourBar"
import EvationBar from "./EvationBar"
import MemoActions from "./Actions"
import Sound from "react-sound"
import { useSelector } from "react-redux"
import soundfile, { soundManager } from "../audio/soundtrack.mp3"

export default function Game() {
  // Initial setup
  window.soundManager.setup({ debugMode: false }) // No console.logs from <Sound />

  const status = useSelector(status => status)

  console.log(status)

  return (
    <>
      <Sound url={soundfile} playStatus={Sound.status.PAUSED} volume={5} />
      <h1 className='messages flex align-center'>{status.message}</h1>
      <div className='screen flex align-center-bottom'>
        <Player position='start'>
          <HealthBar lifePoints={status.player1.lifePoints} />
          <ArmourBar armourPoints={status.player1.armour} />
          <EvationBar evationPoints={status.player1.evation} />
          <Fighter type='knight' player='player1' action={status.player1.action} />
          <MemoActions player='player1' />
        </Player>
        <Player position='end'>
          <HealthBar lifePoints={status.player2.lifePoints} />
          <ArmourBar armourPoints={status.player2.armour} />
          <EvationBar evationPoints={status.player2.evation} />
          <Fighter type='adventuress' player='player2' action={status.player2.action} />
          <MemoActions player='player2' />
        </Player>
      </div>
    </>
  )
}

/* "./audio/08 BGM - Whoa I'm In Space Cuba.mp3".default */

/*
Sound.status.
  PLAYING
  PAUSED
  STOPPED
*/

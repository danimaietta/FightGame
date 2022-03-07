import React from "react"
import { useSelector, useDispatch } from "react-redux"

function Fighter({ player = "player1", type = "knight", action = "Idle" }) {
  const status = useSelector(status => status)
  const dispatch = useDispatch()
  const [frame, setFrame] = React.useState(1)

  const framesByType = () => {
    if (action === "Idle") {
      return 7
    } else if (action === "Dead") {
      return 7
    } else if (action === "Attack") {
      return 7
    } else if (action === "Jump") {
      return 7
    } else if (action === "Slide") {
      return 4
    } else {
      console.log("didnt thought there would be an else in framesByType()")
    }
  }

  React.useEffect(() => {
    const id = window.setTimeout(
      () => {
        try {
          //console.log(`framesByType: ${framesByType()}`)
          if (frame < framesByType()) {
            //console.log(`${frame} ${action}`)
            setFrame(frame => frame + 1)
          } else {
            //console.log(`${frame} ${action}`)
            setFrame(f => f - 1)
            if (action !== "Idle") {
              dispatch({ type: "IDLE" })
            } else if (status.player1.lifePoints <= 0) {
              dispatch({ type: "DEAD_P1" })
            } else if (status.player2.lifePoints <= 0) {
              dispatch({ type: "DEAD_P2" })
            }
          }
        } catch (error) {
          console.error("Error in Fighter:", error)
          console.log("Error in frame: ", frame)
        }
      },
      action === "Dead" ? 1000 : 150
    )
    return () => {
      if (frame == framesByType()) {
        setFrame(1)
      }
      window.clearTimeout(id)
    }
  }, [frame])

  return (
    <>
      <img
        className={player === "player2" ? "flip-x" : ""}
        src={require(`../sprites/${type}/${action} (${frame}).png`).default}
        alt={`not found`}
        width='400px'
        height='500px'
      />
    </>
  )
}

export default React.memo(Fighter)

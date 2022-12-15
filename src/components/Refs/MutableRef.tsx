import { useState, useRef, useEffect } from 'react'

export const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const [timerText, setTimerText] = useState('Stop Timer')
  const interValRef = useRef<number>(0)

  const stopTimer = () => {
    // setTimerText('Start Timer');
    setTimer(0)
    if (interValRef.current) {
      window.clearInterval(interValRef.current)
    }
  }
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }, [])

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>{timerText}</button>
    </div>
  )
}

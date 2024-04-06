import React, { useEffect, useState } from 'react'

function App() {
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hr, setHr] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const stopwatch = () => {
    if (isRunning)
      setSec(sec + 1)
    if (sec >= 59) {
      setSec(0)
      setMin(min + 1)
    }
    if (min >= 59) {
      setMin(0)
      setHr(hr + 1)
    }
  }

  const start = () => { setIsRunning(true) }
  const pause = () => { setIsRunning(false) }
  const reset = () => { setSec(0), setMin(0), setHr(0), setIsRunning(false) }
  const padding = (num) => {
    if (num < 10)
      return "0" + num
    return num
  }

  useEffect(() => {
    const intervalId = setInterval(() => { stopwatch() }, 1000);
    return () => clearInterval(intervalId)
  }, [sec, isRunning])

  return (
    <div>
      <label>{padding(hr)}:{padding(min)}:{padding(sec)}</label>
      <br />
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App

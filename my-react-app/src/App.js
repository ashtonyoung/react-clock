import { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div>
      <Clock />
    </div>
  )
}

function Clock() {

  const [time, updateTime] = useState(new Date())

  const refresh = () => updateTime(new Date())

  useEffect(() => {
    const timerID = setInterval(refresh, 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  }, [])
  return (
    <div>
      <h1>{time.toLocaleTimeString('en-US', {timeZone: 'America/Denver'})}</h1>
      {/* <Seconds initTime={date.getSeconds()}/> */}
    </div>
  )
}


export default App;

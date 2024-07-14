import { useState } from 'react'
import './App.css'
// import Timer from './components/Timer'
import Jokes from './components/Jokes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Timer /> */}
      <Jokes />
   </>
  )
}

export default App

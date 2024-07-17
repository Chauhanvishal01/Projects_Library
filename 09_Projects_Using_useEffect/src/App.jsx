import React from 'react'
import './App.css'
 import Timer from './components/Timer'
 import Jokes from './components/Jokes'
 import RandomUser from './components/RandomUser'
import ContactList from './components/ContactList'
function App() {

  return (
    <>
      <div class="main">
      <Timer />
      <Jokes />
      <RandomUser />
      <ContactList />
      </div>
      
   </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import words from '../words/words.json'
import Board from './Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Board wordLength={5} guesses={6} word={'Test'}></Board>    
    </div>
  )
}

export default App

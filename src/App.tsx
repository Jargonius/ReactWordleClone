import { useState } from 'react'
import './App.css'
import './colors.css'
import words from '../words/words.json'
import GameBoard from './GameBoard'
import Keyboard from './Keyboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GameBoard wordLength={5} guesses={6} word={'Test'}></GameBoard>
      <Keyboard></Keyboard>
    </div>
  )
}

export default App

import Row from './Row'
import WordGuess from './WordGuess.class';

function GameBoard(props: any) {

  return (
    <div className={'game-board'}>
      {
        props.wordGuesses.guesses.map(function(guess: WordGuess, index: number) {
          return <Row key={guess.word + index} length={props.wordLength} guess={guess} invalid={guess.invalid} selected={props.wordIndex == index}></Row>
        })
      }
    </div>
  )
}

export default GameBoard

import Row from './Row'
import WordGuess from './WordGuess.class';

function GameBoard(props: any) {

  return (
    <div className={'game-board'}>
      {
        props.wordGuesses.getGuesses().map(function(guess: WordGuess, index: number) {
          return <Row key={guess.getWord() + index} length={props.wordLength} guess={guess} invalid={guess.isInvalid()} selected={props.wordIndex == index}></Row>
        })
      }
    </div>
  )
}

export default GameBoard

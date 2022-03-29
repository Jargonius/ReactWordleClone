import Row from './Row'
import WordGuess from './WordGuess.class';

function GameBoard(props: any) {

  function padWord(word: string) {
    let padding = props.wordLength - word.length;
    let paddedWord = word + ' '.repeat(padding);
    return paddedWord
  }

  return (
    <div className={'game-board'}>
      {
        props.wordGuesses.getGuesses().map(function(word: WordGuess, index: number) {
          return <Row key={word.getWord() + index} length={props.wordLength} word={padWord(word.getWord())} invalid={word.isInvalid()} selected={props.wordIndex == index}></Row>
        })
      }
    </div>
  )
}

export default GameBoard

import Row from './Row'

function GameBoard(props: any) {

  function padWord(maxWordLength: number) {
    let padding = maxWordLength - props.word.length;
    let paddedWord = props.word + ' '.repeat(padding);
    return paddedWord
  }

  return (
    <div className={'game-board'}>
      {
        Array.from(Array(props.guesses), () => {
          return <Row key={Math.random()} length={props.wordLength} word={padWord(props.wordLength)}></Row>
        })
      }
    </div>
  )
}

export default GameBoard

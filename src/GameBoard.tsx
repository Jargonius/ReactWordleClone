import Row from './Row'

function GameBoard(props: any) {

  function padWord(word: string) {
    let padding = props.wordLength - word.length;
    let paddedWord = word + ' '.repeat(padding);
    return paddedWord
  }

  return (
    <div className={'game-board'}>
      {
        props.words.map(function(word: string, index: number) {
          return <Row key={word + index} length={props.wordLength} word={padWord(word)} state={props.state} selected={props.wordIndex == index}></Row>
        })
      }
    </div>
  )
}

export default GameBoard

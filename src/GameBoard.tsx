import Row from './Row'

function GameBoard(props: any) {

  // const gameState = props.gameState;
  // const word = gameState.words[gameState.wordIndex];

  function padWord(word: string) {
    let padding = props.wordLength - word.length;
    let paddedWord = word + ' '.repeat(padding);
    return paddedWord
  }

  return (
    <div className={'game-board'}>
      {/* {
        Array.from(Array(gameState.words), () => {
          return <Row key={Math.random()} length={gameState.wordLength} word={padWord(gameState.wordLength)}></Row>
        })
      } */}
      
      {
        props.words.map(function(word: string, index: number){
          return <Row key={word + index} length={props.wordLength} word={padWord(word)}></Row>
        })
      }
    </div>
  )
}

export default GameBoard

import Tile from "./Tile"

function Board(props: any) {

  const styles = {
    board: {
      padding: "0 20px",
      display: "flex",
    }
  }

  function padWord(word: string) {
      let padding = props.length - word.length;
      let paddedWord = word + ' '.repeat(padding);
      return paddedWord;
  }

  return (
    <div style={styles.board}>
      {
        padWord(props.guess.word).split('').map(function(letter: string, index: number){
          return <Tile invalid={props.invalid} key={letter + index} state={props.guess.getLetterState(index)} letter={letter} selected={props.selected}></Tile>
        })
      }
    </div>
  )
}

export default Board

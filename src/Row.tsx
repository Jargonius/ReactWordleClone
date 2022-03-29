import Tile from "./Tile"

function Board(props: any) {
  const styles = {
    board: {
      padding: "0 20px",
      display: "flex",
    }
  }

  return (
    <div style={styles.board}>
      {
        props.word.split('').map(function(letter: string, index: number){
          return <Tile key={letter + index} state={props.state} letter={letter} selected={props.selected}></Tile>
        })
      }
    </div>
  )
}

export default Board

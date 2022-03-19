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
        Array.from(Array(props.length), () => {
          return <Tile key={Math.random()} state={'correct'} letter={'X'}></Tile>
        })
      }
    </div>
  )
}

export default Board

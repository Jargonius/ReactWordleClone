import Row from './Row'

function Board(props: any) {
  const styles = {
    board: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column"
    }
  }

  return (
    <div style={styles.board}>
      {
        Array.from(Array(props.guesses), () => {
          return <Row key={Math.random()} length={props.wordLength}></Row>
        })
      }
    </div>
  )
}

export default Board

import './Tile.css'

function Tile(props: any) {

  return (
    <div className={`tile ${props.state}`}>{props.letter}</div>
  )
}

export default Tile

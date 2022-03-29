import './Tile.css'

function Tile(props: any) {

  return (
    <div className={`tile ${props.state} ${props.selected ? 'selected' : ''}`}>{props.letter}</div>
  )
}

export default Tile

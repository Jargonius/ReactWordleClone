import './Key.css'

function Key(props: any) {

  return (
    <div className={`key ${props.state}`}>{props.label}</div>
  )
}

export default Key

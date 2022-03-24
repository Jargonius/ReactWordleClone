import './Key.css'

function Key(props: any) {

  function letterClicked(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();
    console.log(props);
    props.type(props.label);
  }

  return (
    <div className={`key ${props.state} ${props.label}`} onClick={letterClicked}>{props.label}</div>
  )
}

export default Key

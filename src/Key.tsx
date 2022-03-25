import './Key.css'

function Key(props: any) {

  function letterClicked() {
    if(props.label == 'Bk') {
      props.type('Backspace');
    } else if(props.label == 'En') {
      props.type('Enter');
    } else if(props.label == 'Sp') {
      props.type('');
    } else {
      props.type(props.label);
    }
  }

  return (
    <div className={`key ${props.state} ${props.label}`} onClick={letterClicked}>{props.label!= 'Sp' ? props.label : ''}</div>
  )
}

export default Key

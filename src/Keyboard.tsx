import Key from './Key'
import './Keyboard.css'
import settings from './settings.json'

function Keyboard(props: any) {
  
  function typeLetter(letter: string) {
    props.type(letter);
    console.log(props)
  }

  return (
    <div className={`keyboard enter-${settings.keyboard.enterPosition} back-${settings.keyboard.backspacePosition}`}>
      <Key state={'empty'} label={'Q'} type={typeLetter}></Key>
      <Key state={'empty'} label={'W'} type={typeLetter}></Key>
      <Key state={'empty'} label={'E'} type={typeLetter}></Key>
      <Key state={'empty'} label={'R'} type={typeLetter}></Key>
      <Key state={'empty'} label={'T'} type={typeLetter}></Key>
      <Key state={'empty'} label={'Y'} type={typeLetter}></Key>
      <Key state={'empty'} label={'U'} type={typeLetter}></Key>
      <Key state={'empty'} label={'I'} type={typeLetter}></Key>
      <Key state={'empty'} label={'O'} type={typeLetter}></Key>
      <Key state={'empty'} label={'P'} type={typeLetter}></Key>
      <Key state={'empty'} label={'A'} type={typeLetter}></Key>
      <Key state={'empty'} label={'S'} type={typeLetter}></Key>
      <Key state={'empty'} label={'D'} type={typeLetter}></Key>
      <Key state={'empty'} label={'F'} type={typeLetter}></Key>
      <Key state={'empty'} label={'G'} type={typeLetter}></Key>
      <Key state={'empty'} label={'H'} type={typeLetter}></Key>
      <Key state={'empty'} label={'J'} type={typeLetter}></Key>
      <Key state={'empty'} label={'K'} type={typeLetter}></Key>
      <Key state={'empty'} label={'L'} type={typeLetter}></Key>
      <Key state={'empty'} label={'Z'} type={typeLetter}></Key>
      <Key state={'empty'} label={'X'} type={typeLetter}></Key>
      <Key state={'empty'} label={'C'} type={typeLetter}></Key>
      <Key state={'empty'} label={'V'} type={typeLetter}></Key>
      <Key state={'empty'} label={'B'} type={typeLetter}></Key>
      <Key state={'empty'} label={'N'} type={typeLetter}></Key>
      <Key state={'empty'} label={'M'} type={typeLetter}></Key>
      <Key state={'empty'} label={'Bk'} type={typeLetter}></Key>
      <Key state={'empty'} label={'En'} type={typeLetter}></Key>
    </div>
  )
}

export default Keyboard

import Key from './Key'
import './Keyboard.css'

function Keyboard(props: any) {

  return (
    <div className={"keyboard"}>
      <Key label={'Q'}></Key>
      <Key label={'W'}></Key>
      <Key label={'E'}></Key>
      <Key label={'R'}></Key>
      <Key label={'T'}></Key>
      <Key label={'Y'}></Key>
      <Key label={'U'}></Key>
      <Key label={'I'}></Key>
      <Key label={'O'}></Key>
      <Key label={'P'}></Key>
      <Key label={'A'}></Key>
      <Key label={'S'}></Key>
      <Key label={'D'}></Key>
      <Key label={'F'}></Key>
      <Key label={'G'}></Key>
      <Key label={'H'}></Key>
      <Key label={'J'}></Key>
      <Key label={'K'}></Key>
      <Key label={'L'}></Key>
      <Key label={'🠴'}></Key>
      <Key label={'Z'}></Key>
      <Key label={'X'}></Key>
      <Key label={'C'}></Key>
      <Key label={'V'}></Key>
      <Key label={'B'}></Key>
      <Key label={'N'}></Key>
      <Key label={'M'}></Key>
      <Key label={'↩'}></Key>
    </div>
  )
}

export default Keyboard

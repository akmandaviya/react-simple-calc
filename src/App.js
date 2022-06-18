import React, { useRef, useState } from 'react'
import './App.css'

function App () {

const [result, setResult] = useState("")
const inputRefernce = useRef (null)


function doClick (e) {
  setResult(result.concat(e.target.name))
}

function clearAll () {
  setResult("")
}


function backAll() {
   setResult(result.slice(0, -1))
}

function calculate () {
try {
  setResult(eval(result).toString())
}
catch (error) {
  setResult("Error detected")
}
}

return (
  <div className='Calc-body'>

    <form className='input'>
      <input type="text" value={result} ref={inputRefernce}/>
    </form>

    <div className='keypad'>
      <button id="clear" onClick={clearAll}>Clear</button>

      <button id="back" onClick={backAll}>Back Space</button>

      <button name="1" onClick={doClick}>1</button>

      <button name="2" onClick={doClick}>2</button>

      <button name="3" onClick={doClick}>3</button>

      <button name="4" onClick={doClick}>4</button>

      <button name="5" onClick={doClick}>5</button>

      <button name="6" onClick={doClick}>6</button>

      <button name="7" onClick={doClick}>7</button>

      <button name="8" onClick={doClick}>8</button>

      <button name="9" onClick={doClick}>9</button>

      <button name="." onClick={doClick}>.</button>

      <button name="+" onClick={doClick}>+</button>

      <button name="-" onClick={doClick}>-</button>

      <button name="/" onClick={doClick}>/</button>

      <button name="*" onClick={doClick}>*</button>

      <button name="0" onClick={doClick}>0</button>

      <button name="00" onClick={doClick}>00</button>

      

      <button id="result" onClick={calculate}>Result</button>
    </div>
  </div>


)
}
export default App
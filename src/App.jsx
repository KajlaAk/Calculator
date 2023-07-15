import { Button } from '@mui/material'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [result,setResult]=useState("");

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
  }

  const clearResult=()=>{
    setResult("");
  }
  const calculate=()=>{
    setResult(eval(result).toString());
  }
  const backspace=()=>{
    setResult(result.slice(0,result.length-1));
  }
  return (
    <div className ="calc">
      <input type='text' placeholder='0'id='answer'value={result}/>
      <div className="keypad">
      <button class="button"value="Clear" onClick={clearResult}>Clear</button>
      <button class="button"value="backspace"onClick={backspace}><BackspaceOutlinedIcon/></button>
      <button class="button"value="="onClick={calculate} >=</button>
      <button class="button"value="9"onClick={clickHandler}>9</button>
      <button class="button" value="8"onClick={clickHandler}>8</button>
      <button class="button" value="7"onClick={clickHandler}>7</button>
      <button class="button" value="6"onClick={clickHandler}>6</button>
      <button class="button" value="5"onClick={clickHandler}>5</button>
      <button class="button" value="4"onClick={clickHandler}>4</button>
      <button class="button" value="3"onClick={clickHandler}>3</button>
      <button class="button" value="2"onClick={clickHandler}>2</button>
      <button class="button"  value="1"onClick={clickHandler}>1</button>
      <button class="button" value="0"onClick={clickHandler}>0</button>
      <button class="button" value="."onClick={clickHandler}>.</button>
      <button class="button" value="+"onClick={clickHandler}>+</button>
      <button class="button" value="-"onClick={clickHandler}>-</button>
      <button class="button" value="/"onClick={clickHandler}>/</button>
      <button class="button" value="*"onClick={clickHandler}>*</button>
      
      </div>
      
    </div>
  )
}

export default App

import { useState} from 'react'
import './App.css'

function App() {
  
 let[counter,setcounter]=useState(15)
// Hooks understanding.

//let counter=15
const addValue=()=>{
  if(counter>=20){
    return ;
  }
  counter+=1

setcounter(counter)

}
const decValue=()=>{
  if(counter<=0){
    return ;
  }
  counter-=1

setcounter(counter)

}
  return (
    <>
  <h1>  second react Project</h1>
  <h2>Counter value: {counter}</h2>
   
   <button
    onClick={addValue}>
    Add value</button>
   <br/>
   <button onClick={decValue}>remove value</button>
    </>
  )
}

export default App

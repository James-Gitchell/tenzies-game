import React from "react"
import Die from "./components/Die"
import './App.css';
import {nanoid} from "nanoid"



export default function App() {
  const [ dice, setDice ] = React.useState(allNewDice())
 function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push({
            value: Math.ceil(Math.random() * 6),
             isHeld: false,
             id: nanoid()
             })
      }
      return newDice
     }
const diceElements = dice.map(die => <Die key={die.id} isHeld={die.isHeld} value={die.value} /> )
function rollDice(){
  setDice(allNewDice())
}
  
  

  return(
    
     <main>
       <div className="dice--container">
          {diceElements}
       </div>
       <button className="roll--dice" onClick={rollDice}>
            Roll
       </button>
     
     </main>
        
      
    
  )
}

/*
<Die value= {dice} />
         <Die value= {dice} />
         <Die value= {dice} />
         <Die value= {dice} />
         <Die value= {dice} />
         <Die value= {dice} />
         <Die value= {dice} />
         <Die value= {dice} />
         <Die value= {dice} />   
               */

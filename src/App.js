import React, { useState } from 'react'
import './App.css'

function App() {

    const [Weight, setWeight] = useState('')
    const [height, setheight] = useState('')
    const [result, setresult] = useState('')
    const [index, setindex] = useState('')


    let bmiHnadler=()=>{
        setresult(Weight/(height*height))

        if(result>=25){
            setindex('You are under weight')
    
        }
        else if(result<=18){
            setindex('You are over weight')
        }
        else{
            setindex('Your are Fit ')
        }
    
    
    }
    const ReloadPage=()=>{
        setWeight('')
        setheight('')
        setresult('')
        setresult('')
    }
   
  return (
    <div className="main">
        <div className="form">
            <form >
            <p>In KG</p>
            <input type="text" placeholder='Enter your Weight' value={Weight} 
            onChange={(e)=>{setWeight(e.target.value)}}
            />

            <p>In Meters</p>
            <input type="text" placeholder='Enter your height ' value={height}
            onChange={(e)=>{setheight(e.target.value)}} />
            </form>
            <button  onClick={()=>{bmiHnadler()}} >Click to check BMI</button>
            <button onClick={()=>{
                ReloadPage()
            }}>Reload</button>
            <h4>Your BMI is :{Math.round(result)} </h4>
            <br />
            <h4>{index} </h4>
            


           
        </div>
    </div>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {
  
  function handleClick(){
    alert('button Clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }
  return (
    <>   
      <h1>React core Concepts2</h1>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}><a href="http://localhost:5173/">Click Me</a>
      </button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('third clicked')}}>Click3</button>
      <button onClick={()=> addToFive(3)}>Four</button>
    </>
  )
}

export default App

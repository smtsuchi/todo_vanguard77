import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ToDo from './ToDo';
import Window from './Window';

export default function App() {

  const fib = () => {
    console.log('this is running')
    return 10
  }
  let [count, setCount] = useState(1);
  const addCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  

  const [pokemon, setPokemon] = useState({})

  const getData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await res.json()
    console.log('finished grabbing info')
    return data
  }
  useEffect(async ()=>{
    const data = await getData();
    setPokemon(data)
  }, [])





  

  return (
    <div>
      <h1>This is a functional component</h1>
      <h3>The count is: {count}</h3>
      <button onClick={()=>{addCount()}}>+</button>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/window' element={<Window />}/>
        <Route path='/todo' element={<ToDo />}/>
      </Routes>
    </div>
  )
}

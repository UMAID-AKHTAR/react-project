import { useState, useEffect } from "react";
import axios from "axios";


function Pokemon() {

const [Search,SetSearch] = useState("")
const [Data, setData] = useState([])

const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

useEffect(() => {
 const fetchPokemon= async ()=>{
  try{
    const response=await axios.get(API);
    const results=response.data.results;

    const result= results.map(async(current)=>{
      const actualData=await axios.get(current.url);
      return actualData.data;
    });
   
    const x=await Promise.all(result);
    console.log(x);
    setData(x);
    
  }
  catch(err){
  console.log(err.message);
  }
 }

fetchPokemon();
}, [])

  return (
    <div className=''>
      <nav className='bg-amber-600 h-16 flex items-center justify-center'>
        <h1 className='bg-gradient-to-r from-purple-950 to-green-950 bg-clip-text text-transparent font-extrabold text-4xl'>Pokemone</h1>
      </nav>
      <input 
       type='search'
       value={Search}
       onChange={((e)=>SetSearch(e.target.value))}
       className='bg-blue-400 rounded-sm mt-4 absolute left-1/2 -translate-x-1/2 px-4 py-2 w-2xs'
       placeholder='Search'
       ></input>
      
    <div>
     {
      Data.map((element)=>(
      <li key={element.id}>
        <img src={element.sprites.front_default}/>
      </li>
      ))
     }
    </div> 
    </div>
  )
}


export default Pokemon
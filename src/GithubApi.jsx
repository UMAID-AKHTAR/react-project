import React from 'react'
import axios from 'axios'
import Card from './Card'
import { useEffect,useState } from 'react'

const api= "https://api.github.com/users"

function GithubApi() {
  const [data, setData] = useState([]);

  const getData=async()=>{
    try{
      const res= await axios.get(api)
      setData(res.data);
    }
    catch(err){
      console.log(err);
    }
  }
  
 useEffect(() => {
  getData();
 }, [])
 
  return (
   <>
   <div className='relative h-full '>
    <nav className='fixed top-0 z-50 w-full h-14 md:h-16 flex items-center justify-center bg-gradient-to-r from-black via-slate-900 to-emerald-700 shadow-xl'>
     <input 
      type='search' 
      placeholder='search' 
      className='text-center w-1/3 h-10 bg-blue-100 text-black rounded-2xl'></input>
    </nav> 
    <div className='pt-10 flex flex-wrap gap-3 justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
'>
     {
         data.map((item) => (
         <Card key={item.id} item={item}/>
    ))}
    </div>
    </div>
   </>
  )
}

export default GithubApi;
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'


const api="https://api.github.com/users"

function R() {
  const [data, setData] = useState([]);

  const getData=async()=>{
    const res= await axios.get(api)
    setData(res.data);
  }
  
 useEffect(() => {
  getData();
 }, [])
 
  return (
   <>
    <div className='p-6 flex flex-wrap gap-3 justify-center '>
     {
      data.map((item)=>(
        <li className="mb-3 w-40 h-50 rounded-md list-none  items-center bg-black hover:scale-110 transition-transform duration-150 overflow-hidden" key={item.id}>
          <p className=' text-center text-green-100 hover:scale-110 break-words mt-4 tracking-wide font-bold'>{item.login}</p>
          <img  className="object-contain w-full h-full" src={item.avatar_url}></img>
        </li>
      )
      )
     }
    </div>
   </>
  )
}

export default R
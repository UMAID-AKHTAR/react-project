import React, {useEffect,useState} from 'react'
import { getData } from './Api/AxiosData';

function Crud() {
    const [data, setData] = useState([]);

    const capitalizeWords = (text) => {
  return text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};


    const getPosts= async ()=>
     {
      try
       {
        const res=await getData("/posts");
        setData(res.data);
        console.log(res.data);
       }
      catch(err)
       {
        console.log(err);
       }
         
     }

    useEffect(() => {
     getPosts();
    },[])
    
  return (
    <div className='bg-red-700 px-7 py-7'>
        <header className='flex justify-center gap-2 w-fit mx-auto'>
            <section className='flex py-2 px-2 items-stretch'>
                <input
              placeholder="Add Title"
              type='text'
              className='bg-amber-950 text-blue-50 font-semibold px-2 py-2 rounded-b-md'/>
             <input
              placeholder="Add Task"
              type='text'
             
              className='bg-amber-950 ml-6 text-blue-50 font-semibold px-2 py-2 rounded-b-md'/>
             <button className='bg-blue-600 h-auto w-20 rounded-2xl ml-2 font-semibold text-amber-50'>Add</button>
              </section>
        </header>

        <ol className='grid grid-cols-3 gap-4 px-10 mt-10'>
            {
                data.map((ele)=>(
                <li key={ele.id}
                  className='bg-black/80 text-white p-4 rounded-lg'>
                 <p className='font-bold'>{ele.id}</p>   
                 <p className='font-semibold'>{capitalizeWords(ele.title)}</p>
                 <p className='text-sm'>{capitalizeWords(ele.body)}</p>
                 <div className='flex gap-3 mt-3'>
                 <button className='bg-blue-600 px-3 py-1 rounded'>Edit</button>
                 <button className='bg-red-600 px-3 py-1 rounded'>Delete</button>
                 </div>
                </li>))
            }
        </ol>
    </div>
  )
}
export default Crud;
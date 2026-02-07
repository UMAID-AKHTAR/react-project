import React, {useEffect,useState} from 'react'
import { getData } from '../Api/AxiosData';
import CrudCard from './CrudCard';

function Crud() {

    const [data, setData] = useState([]);

    const capitalizeWords = (text) => 
      {
       return text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      }


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
        <form className='flex justify-center gap-2 w-fit mx-auto'>
            <section className='flex py-2 px-2 items-stretch'>
                <input
              placeholder="Add Title"
              type='text'
              className='bg-neutral-950  text-blue-50 font-semibold px-2 py-2 rounded-b-md'/>
             <input
              placeholder="Add Task"
              type='text'
             
              className='bg-neutral-950 ml-6 text-blue-50 font-semibold px-2 py-2 rounded-b-md'/>
             <button className='bg-blue-600 h-auto w-20 rounded-2xl ml-2 font-semibold text-amber-50'>Add</button>
              </section>
        </form>

        <ol className='grid grid-cols-3 gap-4 px-10 mt-10'>
            {
              data.map((ele)=>(<CrudCard key={ele.id} id ={ele.id} title={capitalizeWords(ele.title)} body={capitalizeWords(ele.body)}/>))
            }
        </ol>
    </div>
  )
}
export default Crud;
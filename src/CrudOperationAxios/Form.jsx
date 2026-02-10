
import {useState,useEffect} from 'react'
import { postData } from '../Api/AxiosData';

function Form({data, setData, update, setUpdate}) {

    const [add, setAdd] = useState({
        title: "",
        body: ""
    })

    useEffect(()=>{
        update && setAdd({
            title:update.title || "",
            body: update.body || "",
        })

    },[update])

    const addpostdata=async()=>{
        try
         {
            const res= await postData(add);
            setData((prev) => [...prev, res.data]);
            setAdd({title:"" ,body:""})
         }

        catch(err)
         { console.log(err.message); }
    }

    const submit= async(e)=>{
        e.preventDefault();
        if(!add.title || !add.body) 
            {alert("Dono Bhar L@wde"); return;}
        addpostdata();        
    }

    return (
        <>
            <form onSubmit={submit} className='flex justify-center gap-2 w-fit mx-auto'>
                <section className='flex py-2 px-2 items-stretch'>
                    <input
                        placeholder="Add Title"
                        type='text'
                        name='title'
                        value={add.title}
                        onChange={(e)=>setAdd((prev)=>({...prev, title : e.target.value}))}
                        className='bg-neutral-950  text-blue-50 font-semibold px-2 py-2 rounded-b-md' />
                    <input
                        placeholder="Add Task"
                        type='text'
                        name='body'
                        value={add.body}
                        onChange={(e)=>setAdd((prev)=>({...prev, body : e.target.value}))}
                        className='bg-neutral-950 ml-6 text-blue-50 font-semibold px-2 py-2 rounded-b-md' />
                    <button type="submit" className='bg-blue-600 h-auto w-20 rounded-2xl ml-2 font-semibold text-amber-50'>Add</button>
                </section>
            </form>
        </>
    )
}

export default Form
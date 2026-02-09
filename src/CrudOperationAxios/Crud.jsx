import React, { useEffect, useState } from 'react'
import { deleteData, getData } from '../Api/AxiosData';
import CrudCard from './CrudCard';
import Form from './Form';

function Crud() {
  const [data, setData] = useState([]);

  // Capital letter of first index
  const capitalizeWords = (text) => {
    return text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }

  // Delete data 
  const handledelete = async (id) => {
    try {
      const res = await deleteData(id);
      setData((prev) => prev.filter((cur) => cur.id !== id));
    }
    catch (err) { console.log(err.message); }
  }

  // Getting data
  const getPosts = async () => {
    try {
      const res = await getData("/posts");
      setData(res.data);
      console.log(res.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])



  return (
    <div className='bg-red-700 px-7 py-7'>

      <Form data={data} setData={setData} />
        
      <ol className='grid grid-cols-3 gap-4 px-10 mt-10'>
        {
          data.map((ele) => (<CrudCard key={ele.id} id={ele.id} title={capitalizeWords(ele.title)} body={capitalizeWords(ele.body)} handledelete={handledelete}
          />))
        }
      </ol>
    </div>
  )
}
export default Crud;
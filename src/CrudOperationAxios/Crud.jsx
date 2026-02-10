import { useEffect, useState } from 'react'
import { deleteData, getData } from '../Api/AxiosData';
import CrudCard from './CrudCard';
import Form from './Form';

function Crud() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState({});



  const handleupdate = (ele)=> setUpdate(ele);

  // Capital letter of first index
  const capitalizeWords = (text) => {
  if (!text) return "";
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
      const res = await getData();
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
    <div className='bg-amber-700 px-7 py-7 min-h-screen'>

      <Form data={data} setData={setData} update={update} setUpdate={setUpdate}/>
        
      <ol className='grid grid-cols-3 gap-4 px-10 mt-10'>
        {
          data.map((ele,index) => (<CrudCard key={ele.id} ele={ele} number={index+1} id={ele.id} title={capitalizeWords(ele.title)} 
           body={capitalizeWords(ele.body)} handledelete={handledelete} handleupdate={handleupdate}
          />))
        }
      </ol>
    </div>
  )
}
export default Crud;
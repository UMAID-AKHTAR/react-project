import { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState([]);


  const addData = (e) => {
     e.preventDefault();
    if (!name || !email) 
      {
        alert("All fields are required");
        return;
      }

    setTask((prev) => [...prev, { name, email }]);
    console.log(task);
    setName("");
    setEmail("");
  };
  
  const v="No Data Available Please Add Some Data...."
  return (
    <>
      <form 
       onSubmit={addData}
       className="bg-amber-950">
        <nav className="bg-black w-full text-sky-300 text-center text-3xl font-bold font-sans py-4">Todo List</nav>

        <input
         type="text"
         placeholder="Enter Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         className="bg-blue-300 border-4 border-cyan-400 rounded-lg px-5 py-2 text-xl outline-none inline-block m-6"/>

         <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-blue-300 border-4 border-cyan-400 rounded-lg px-5 py-2 text-xl outline-none inline-block m-6"/>

        <button
         type="submit"
         className="bg-black text-amber-50 rounded-lg px-6 py-3 text-xl font-bold m-8">Add Task</button>  
      </form>

      <div className=" bg-blue-300 px-5 py-2 mt-8 ">
        { task.length==0 &&(
           <p>{v}</p>
        )}
        

        {
          task.map((item,i)=>{
            return (
              <li key={i}>
                <p>{item.name}</p>
                <p>{item.email}</p>
              </li>

            );
          })
        }

      </div>

    </>  
  );
}

export default Todo;


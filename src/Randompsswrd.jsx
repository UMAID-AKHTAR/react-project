import React from "react";
import { useState } from "react";
import "./App.css";

function Randompsswrd() {

  const [length, setLength] = useState(4)
  const [Upper, setUpper] = useState(false);
  const [Lower, setLower] = useState(false);
  const [number, setNumber] = useState(false);
  const [Symbol, setSymbol] = useState(false);
  const [fpPass, setfpPass] = useState("")
  
  
  let sm="!@#$%^&*"
  let uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lc="abcdefghijklmnopqrstuvwxyz"
  let nm="0123456789"

  const geneRate=()=>{

    let final=""
    let ch=""

    try{ 
    if (!length || length < 4 || length>15) {
      throw new Error("Invalid password length");
    }
    if( Upper || Lower || number || Symbol)
    {
      if(Upper) ch+=uc;
      if(Lower) ch+=lc;
      if(number) ch+=nm;
      if(Symbol) ch+=sm;

      for(let i=0; i<length; i++)
      {
        final+=ch.charAt(Math.floor(Math.random()*ch.length));
      } 

      setfpPass(final);     
    }

    else{
      alert('Plese Choose atleast One CheckBox');
      }
    }
    catch (error) {
    alert(error.message);
    }
  }

  const Copy=()=>{
    if(fpPass)
    {
      navigator.clipboard.writeText(fpPass);
      alert("Password Copied");
    }  
  }

  return (
    <>
     <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-sky-600 w-[360px] h-[440px] rounded-xl shadow-lg transition-all duration-300 ease-in-out  hover:shadow-[0_0_25px_rgba(255,255,255,0.9)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-black text-center py-4 text-2xl font-bold hover:text-blue-50">Password Generator</h1>
      
      <div className="ml-6 mt-6 mr-6  h-10 flex flex-row"> 
        <input
         type="text"
         value={fpPass}
         readOnly
         className="bg-amber-50 w-full h-full font-bold px-3 py-2 outline-none rounded-l-md"
        />
        <button 
         onClick={Copy}
         className="bg-red-300 text-amber-50 font-bold h-full px-5 rounded-r-md">Copy</button>
      </div>

      <div className="ml-6 mt-2 mr-6 font-bold h-10 flex flex-row py-2">
        <span className=" text-blue-50">Password Length</span>
        <input
         type="number"
          min={4}
          max={15}
          value={length}
          onChange={(e)=> setLength(Number(e.target.value))}
         className="w-20 text-black ml-auto h-full text-center bg-amber-50 px-3 outline-none"/>
      </div>

      <div className="ml-6 mt-2 mr-6  font-bold h-10 flex flex-row py-2">
        <span className="text-blue-50">Include Upper Case Letters</span>
        <input
         type="checkbox"
         checked={Upper}
         onChange={(e)=>setUpper(e.target.checked)}
         className=" w-5 h-5 ml-auto"/>
      </div>

      
      <div className="ml-6 mt-2 mr-6  font-bold h-10 flex flex-row py-2">
        <span className="text-blue-50">Include Lower Case Letters</span>
        <input
         type="checkbox"
         checked={Lower}
         onChange={(e)=>setLower(e.target.checked)}
         className=" w-5 h-5 ml-auto"/>
      </div>

      
      <div className="ml-6 mt-2 mr-6  font-bold h-10 flex flex-row py-2">
        <span className="text-blue-50">Include Number</span>
        <input
         type="checkbox"
         checked={number}
         onChange={(e)=>setNumber(e.target.checked)}
         className=" w-5 h-5 ml-auto"/>
      </div>
      
      <div className="ml-6 mt-2 mr-6 font-bold h-10 flex flex-row py-2">
        <span className="text-blue-50">Include symbols</span>
        <input
         type="checkbox"
         checked={Symbol}
         onChange={(e)=>setSymbol(e.target.checked)}
         className=" w-5 h-5 ml-auto"/>
      </div>
      
      <div className="text-center text-white font-bold ml-8 mt-2 mr-8 bg-black h-10 py-2 rounded hover:bg-blue-800 
          hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          onClick={geneRate}
          >Generate Password</div>
     </div>

    </>
  );
}

export default Randompsswrd;

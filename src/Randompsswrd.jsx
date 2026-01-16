import React from "react";
import "./App.css";

function Randompsswrd() {
  return (
    <>
     <div className="bg-blue-950 w-90 h-110 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-red-900 text-center py-4 text-2xl font-bold hover:text-blue-50">Password Generator</h1>
      
      <div className="ml-6 mt-6 mr-6  h-10 flex flex-row"> 
        <input
         type="text"
         className="bg-amber-50 w-full h-full font-bold px-3 py-2 outline-none rounded-l-md"
        />
        <button className="bg-red-300 font-bold h-full px-5 rounded-r-md">Copy</button>
      </div>

      <div className="ml-6 mt-2 mr-6 font-bold h-10 flex flex-row py-2">
        <span className=" text-blue-50">Password Length</span>
        <input
         type="number"
         className="w-20  ml-auto h-full text-center bg-amber-50 px-3 outline-none"/>
      </div>

      <div className="ml-6 mt-2 mr-6  font-bold h-10 flex flex-row py-2">
        <span className="text-blue-50">Include Upper Case Letters</span>
        <input
         type="checkbox"
         className=" w-5 h-5 ml-auto"/>
      </div>

      
      <div className="ml-6 mt-2 mr-6  font-bold h-10 flex flex-row py-2">
        <span className="text-blue-50">Include Lower Case Letters</span>
        <input
         type="checkbox"
         className=" w-5 h-5 ml-auto"/>
      </div>

      
      <div className="ml-6 mt-2 mr-6  font-bold h-10 flex flex-row py-2">
        <span className="text-blue-50">Include Number</span>
        <input
         type="checkbox"
         className=" w-5 h-5 ml-auto"/>
      </div>
      
      <div className="ml-6 mt-2 mr-6 font-bold h-10 flex flex-row py-2">
        <span className="text-blue-50">Include symbols</span>
        <input
         type="checkbox"
         className=" w-5 h-5 ml-auto"/>
      </div>
      
      <div className="text-center text-white font-bold ml-8 mt-2 mr-8 bg-black h-10 py-2 rounded hover:bg-blue-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]">Generate Password</div>
     </div>
    </>
  );
}

export default Randompsswrd;

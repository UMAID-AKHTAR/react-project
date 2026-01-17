import React, { useState } from "react";
import "./App.css";

function Randompsswrd() {
  const [length, setLength] = useState(4);
  const [Upper, setUpper] = useState(false);
  const [Lower, setLower] = useState(false);
  const [number, setNumber] = useState(false);
  const [Symbol, setSymbol] = useState(false);
  const [fpPass, setfpPass] = useState("");

  let sm="!@#$%^&*";
  let uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lc="abcdefghijklmnopqrstuvwxyz";
  let nm="0123456789";

  const geneRate = () => {
    let final="";
    let ch="";

    try {
      if (!length || length < 4 || length > 15) {
        throw new Error("Invalid password length");
      }

      if (Upper || Lower || number || Symbol) {
        if (Upper) ch+=uc;
        if (Lower) ch+=lc;
        if (number) ch+=nm;
        if (Symbol) ch+=sm;

        for (let i = 0; i < length; i++) {
          final+=ch.charAt(Math.floor(Math.random() * ch.length));
        }

        setfpPass(final);
      } else {
        throw new Error("Please choose at least one checkbox");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const Copy = () => {
    if (fpPass) {
      navigator.clipboard.writeText(fpPass);
      alert("Password Copied");
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-sky-600 w-[85%] sm:w-[360px] min-h-[430px] rounded-xl shadow-lg p-5 transition-all duration-300
        hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      ">

        <h1 className="text-center py-3 text-xl sm:text-2xl font-bold text-black hover:text-blue-50">
          Password Generator
        </h1>

        {/* Password Box */}
        <div className="mt-4 flex">
          <input
            type="text"
            value={fpPass}
            readOnly
            className="bg-amber-50 flex-1 font-bold px-3 py-2 rounded-l-md outline-none text-sm sm:text-base"
          />
          <button
            onClick={Copy}
            className="bg-red-950 text-amber-50 font-bold px-4 sm:px-5 rounded-r-md text-sm sm:text-base"
          >
            Copy
          </button>
        </div>

        {/* Length */}
        <div className="mt-4 flex items-center font-bold">
          <span className="text-blue-50 text-sm sm:text-base">
            Password Length
          </span>
          <input
            type="number"
            min={4}
            max={15}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-20 ml-auto text-center bg-amber-50 px-2 py-1 outline-none text-black rounded"
          />
        </div>

        {/* Checkboxes */}
        {[
          ["Include Upper Case Letters", Upper, setUpper],
          ["Include Lower Case Letters", Lower, setLower],
          ["Include Number", number, setNumber],
          ["Include Symbols", Symbol, setSymbol],
        ].map(([label, state, setter], index) => (
          <div key={index} className="mt-3 flex items-center font-bold">
            <span className="text-blue-50 text-sm sm:text-base">{label}</span>
            <input
              type="checkbox"
              checked={state}
              onChange={(e) => setter(e.target.checked)}
              className="w-5 h-5 ml-auto"
            />
          </div>
        ))}

        {/* Generate Button */}
        <div
          onClick={geneRate}
          className="mt-6 text-center text-white font-bold bg-black py-2 rounded cursor-pointer hover:bg-fuchsia-950 hover:scale-105
           hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-300">
          Generate Password
        </div>
      </div>
    </>
  );
}

export default Randompsswrd;

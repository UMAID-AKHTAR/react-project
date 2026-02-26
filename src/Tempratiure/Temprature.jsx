import React, { useState } from "react";

function TemperatureConverter() {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState("C");
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    if (temp === "") return;

    let converted;
    if (unit === "C") {
      converted = (temp * 9/5) + 32;
      setResult(`${converted.toFixed(4)} °F`);
    } else {
      converted = (temp - 32) * 5/9;
      setResult(`${converted.toFixed(4)} °C`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-6">
          Temperature Converter
        </h2>

        <input
          type="number"
          placeholder="Enter temperature"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
        >
          <option value="C">Celsius → Fahrenheit</option>
          <option value="F">Fahrenheit → Celsius</option>
        </select>

        <button
          onClick={convertTemperature}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Convert
        </button>

        {result && (
          <div className="mt-6 text-center text-lg font-semibold">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default TemperatureConverter;

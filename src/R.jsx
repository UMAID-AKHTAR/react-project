function PasswordUI() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950">
      
      <div className="w-[380px] bg-blue-900 p-6 rounded-lg shadow-lg">
        
        {/* Title */}
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          Password Generator
        </h1>

        {/* Password Input with Copy Button */}
        <div className="relative mb-5">
          <input
            type="text"
            placeholder=""
            className="w-full bg-blue-950 text-white px-3 py-3 rounded outline-none pr-16"
          />
          <button
            className="absolute right-1 top-1 bottom-1 w-12 bg-blue-600 text-white rounded"
          >
            Copy
          </button>
        </div>

        {/* Password Length */}
        <div className="flex items-center text-white mb-3">
          <span>Password length</span>
          <input
            type="number"
            className="ml-auto w-14 text-black text-center rounded"
          />
        </div>

        {/* Options */}
        <div className="space-y-3 text-white">
          <div className="flex items-center">
            <span>Include uppercase letters</span>
            <input type="checkbox" className="ml-auto w-4 h-4" />
          </div>

          <div className="flex items-center">
            <span>Include lowercase letters</span>
            <input type="checkbox" className="ml-auto w-4 h-4" />
          </div>

          <div className="flex items-center">
            <span>Include numbers</span>
            <input type="checkbox" className="ml-auto w-4 h-4" />
          </div>

          <div className="flex items-center">
            <span>Include symbols</span>
            <input type="checkbox" className="ml-auto w-4 h-4" />
          </div>
        </div>

        {/* Generate Button */}
        <button className="w-full mt-6 bg-blue-700 text-white py-3 rounded font-bold">
          Generate password
        </button>

      </div>
    </div>
  );
}

export default PasswordUI;

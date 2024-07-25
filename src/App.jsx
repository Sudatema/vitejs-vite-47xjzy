// App.jsx

import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-10 rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>
        <p className="text-4xl mb-4">{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;

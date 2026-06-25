"use client"
import { useState } from "react";
const Hooks = () => {
    const [count, setCount] = useState(0);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Counter</h1>
        <p className="text-gray-600 mb-6">A counter for testing react use state.</p>


            <div className="flex flex-row">
                <button className="mx-auto mt-4 bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-800" onClick={() => setCount(count -1)}>
                Decrement
              </button>

              <p className="text-center text-4xl text">{count}</p>

              <button className="mx-auto mt-4 bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-800" onClick={() => setCount(count + 1)}>
                Increment
              </button>
            </div>

            <div className="flex flex-row mt-6 m-auto w-100">
              <input type="number" className="border border-gray-300 rounded py-2 px-4"  onChange={(e) => setCount(Number(e.target.value))} />

              
            </div>

      </div>
    </section>
  );
};

export default Hooks;
import { useState } from "react";

export default function Form({ onAddItem }) {
    const [name, setName] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!name) return;
  
      const newItem = { name, checked: false, id: Date.now() };
      // console.log(newItem);
      onAddItem(newItem);
  
      setName('');
    }
  
    return (
    <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between w-full gap-2">
            <div className="w-full">
                <label htmlFor="name">
                    <input 
                    type="text" 
                    placeholder="Add your To-Do List" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full px-3 py-2 text-base font-medium placeholder-gray-400 border-2 rounded-lg outline-none border-brown-pod-900 dark:border-brown-pod-50 placeholder:text-sm text-brown-pod-900 dark:text-brown-pod-50 font-monst bg-brown-pod-200 dark:bg-brown-pod-800" 
                    />
                </label>
            </div>
            <button 
                type="submit" 
                className="px-4 py-2 font-medium text-center border-2 rounded-lg border-brown-pod-900 dark:border-gray-200 font-monst bg-brown-pod-200 dark:bg-brown-pod-800 dark:text-brown-pod-50 hover:bg-brown-pod-800 text-brown-pod-900 hover:text-brown-pod-50 dark:hover:bg-brown-pod-950"
            >
                Add
            </button>
        </div>
    </form>
    );
  }
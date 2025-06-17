import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [event, setEvent] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    // Fetch initial todos from the server
    axios.get("http://localhost:3000/todos")
      .then((response) => {

        setTodos(response.data);
      })
  }, []);
  const handleInputChange = (event) => {
    setEvent(event.target.value);
  };

  const Handleadd = () => {
    axios.post("http://localhost:3000/addtodos", { newtodo: event })
    setTodos([...todos, { task: event }]);
    setEvent("");
  }
  return (
    <>
      <nav className='bg-purple-800 text-white p-4 text-2xl'>
        <h1>Todo App</h1>
      </nav>
      <div  className=' flex flex-col items-center justify-center mt-[15vh]'>
        <div className='rounded bg-white p-6 shadow-md w-full max-w-md flex flex-col gap-4 items-center'>
          <label htmlFor="todo-input">Add a new todo:</label>
          <input type="text" id="todo-input" onChange={handleInputChange} className='border shadow-sm outline-purple-700 px-2 rounded ' />
          <button className='bg-blue-500 text-white p-2 rounded' onClick={Handleadd}>Add</button>
        </div>
        <br />
        <ul className='list-disc pl-6'>
          {todos.map((e, index) => {
            return (
              <li key={index} >{e.task}</li>
              
            )
          })
          }
        </ul>
      </div>
      <footer className='bg-purple-800 fixed w-full bottom-0 text-white p-4 text-center'>
        <p>&copy; 2025 Todo App</p>
      </footer>
    </>
  )
}

export default App

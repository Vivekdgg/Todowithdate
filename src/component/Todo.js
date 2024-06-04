import React, { useState } from 'react'


const Todo = () => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([ ...todos, todo ]);
      };



    const handleSubmit = (e) => {
      e.preventDefault();
      const dateString = date;
      const date1 = new Date(dateString);
  
      const year = date1.getFullYear();
      const day = date1.getDate();
      const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date1.getMonth()];
        const formattedDate = `${month} ${day}, ${year}`;
      if (task.trim() && formattedDate.trim()) {
        addTodo({ task, formattedDate });
        setTask('');
        setDate('');
      }
    };
    function handelDelete(index)
    {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
   
  return (
    <div>
        <p>Add Your Todo With Date</p>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" >Add Task</button>
    </form>

    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
            <div id='text-todo'>
            {todo.task} - {todo.formattedDate}
            </div>
         <div> <button className="btn" onClick={()=>handelDelete(index)}>Delete</button></div>
         
        </li>
      ))}
    </ul>

    </div>
  )
}

export default Todo

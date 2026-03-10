// simple to-do application
import {useState} from 'react';

  
function Todo(){
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);

  function handleChange(e){
    setInput(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    setTodos([...todos,input]);
    setInput("");
  }

  function handleDelete(index){
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }


  return(
    <div className="todo-application">
      <h1>To-Do List</h1>
      <form>
        <input type="text" value={input} onChange={handleChange} placeholder="Enter a task"/>
        <button type="submit" onClick={handleSubmit}>Add Task</button>

      </form>
      <ul>

      
      {todos.map((todo)=>(
        <li key={todo}>{todo}
        <button onClick={handleDelete}>Delete</button>
        </li>

      ))}
      </ul>
      </div>

  );
}
export default Todo;
    
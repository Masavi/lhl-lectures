import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
  /**
   * STATE is just the data that the component
   * manages to render its jsx
   */
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    const idTimeout = setTimeout(() => {
      axios.get('/todos')
      .then(({ data }) => {
        setTodos(data);
      })
      .catch((error) => {
        console.log(error);
      })
    }, 5000);

    return () => clearTimeout(idTimeout);
  }, [])

  const handleCheckboxChange = (task) => {
    // 0) find which element is being changed!
    const foundTodo = todos.find(todo => todo.task === task);

    // 1) modify the checkbox on the given element
    foundTodo.done = !foundTodo.done;

    // 2) create a new array that contains the given change
    const filteredArray = todos.filter(todo => todo.task !== task);

    // 3) use the "setTodos" method to trigger a re-render
    setTodos([...filteredArray, foundTodo]);
  }

  const addTodoItem = () => {
    // todos.push({ task: inputText, done: false });
    // axios.put('/todos/:id', { todo })
    //      .then()

    setTodos([...todos, { task: inputText, done: false }]);
    console.log('TODOS ARRAY:', todos);
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  }

  return (
    <>
      <h2>TodoList Component 🧩</h2>
      {
        todos.map((todo, index) => {
          return <TodoItem
            key={index}
            checkboxChange={handleCheckboxChange}
            task={todo.task}
            done={todo.done} />
        })
      }

      <div style={{ marginTop: '20px' }}>
        <input onChange={handleInputChange} type="text" />
        <button onClick={addTodoItem}>Add todo!</button>
      </div>
    </>
  )
}

export default TodoList;

import { useState } from 'react';
import TodoListInput from '../TodoListInput/TodoListInput';
import TodoListItem from '../TodoListItem/TodoListItem';
import './todolist.css';

function TodoList () {
  const [todoItems, setTodoItems] = useState([
    { id: 2, text: 'Feed charly', isDone: false },
  ]);

  const renderListItems = () => {
    return todoItems.map(todo => (
      <TodoListItem text={todo.text} key={todo.id} />
    ))
  }

  const addTodoItem = (todoText) => {
    const newTodo = { id: todoItems.length + 1, text: todoText, isDone: false };
    setTodoItems([...todoItems, newTodo]);
  }

  return (
    <section className="todo-list">
      <h2>TodoApp</h2>
      <TodoListInput add={addTodoItem} />

      <ul>
        { renderListItems() }
      </ul>

      <p>Pending tasks: {todoItems.length} </p>
    </section>
  )
}

export default TodoList;

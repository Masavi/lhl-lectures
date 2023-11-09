import { useState } from 'react';

function TodoListInput(props) {
  const [inputValue, setInputValue] = useState();

  const handleInput = (event) => {
    setInputValue(event.target.value);
  }

  const handleAddButton = () => {
    props.add(inputValue);
    setInputValue("");
  }

  return (
    <div className="todo-list--input">
      <input
        value={inputValue}
        onChange={handleInput}
        type="text"
        placeholder="Add a new task" />
      <button onClick={handleAddButton}>
        +
      </button>
    </div>
  )
}

export default TodoListInput;

function TodoListItem(props) {
  return (
    <li>
      <span>{props.text}</span>
      <button>DEL</button>
    </li>
  )
}

export default TodoListItem;

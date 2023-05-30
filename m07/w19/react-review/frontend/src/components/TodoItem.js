const TodoItem = ({ task, done, checkboxChange }) => {
  return (
    <li style={{
      width: '300px',
      backgroundColor: 'gray',
      listStyleType: 'none',
      color: 'white',
      padding: '12px 0',
      marginTop: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    }}>
      <span style={{
        paddingBottom: '5px',
        marginRight: '10px'}}>
        { task }
      </span>
      <input
        style={{ margin: 0 }}
        onChange={() => checkboxChange(task)}
        checked={done}
        type="checkbox" />
    </li>
  )
}


export default TodoItem;
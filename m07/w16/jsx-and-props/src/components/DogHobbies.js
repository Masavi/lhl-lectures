function DogHobbies(props) {
  return (
    <ul>
      {
        props.hobbies.length > 0
          ? props.hobbies.map(hobby => <li> {hobby} </li>)
          : 'There are no hobbies available to display'
      }
    </ul>
  );
}

export default DogHobbies;

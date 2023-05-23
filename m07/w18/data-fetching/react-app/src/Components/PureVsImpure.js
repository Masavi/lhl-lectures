// Is this a pure or impure function?
import { useState } from 'react';

const MovieCardWithState = (props) => {
  const [title, setTitle] = useState('Titanic');

  return (
    <>
      <h2>{title}</h2>
      <h3>{props.director}</h3>
      <h4>{props.yearOfRelease}</h4>
      <p>{props.description}</p>
    </>
  )
}

// This is a pure component
const MovieCard = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.director}</h3>
      <h4>{props.yearOfRelease}</h4>
      <p>{props.description}</p>
    </>
  )
}


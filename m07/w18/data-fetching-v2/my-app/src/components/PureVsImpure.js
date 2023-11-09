// HOOKS
import { useState } from 'react';

// PURE FUNCTION
function MovieCard(props) {
    return (
      <>
        <h2>Pure vs Impure</h2>
        <h3>Movie Card</h3>
        <span>{props.title}</span>
        <span>{props.yearOfRelease}</span>
        <span>{props.director}</span>
        <span>{props.genre}</span>
        <button onClick={props.onClick}></button>
      </>
    )
}

// IMPURE FUNCTION
function MovieCardWithState(props) {
    const [title, setTitle] = useState();

    return (
      <>
        <h2>Pure vs Impure</h2>
        <h3>Movie Card</h3>
        <span>{props.title}</span>
        <span>{props.yearOfRelease}</span>
        <span>{props.director}</span>
        <span>{props.genre}</span>
      </>
    )
}
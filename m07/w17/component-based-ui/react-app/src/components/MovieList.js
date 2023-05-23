import { useState } from 'react';
import MovieItem from './MovieItem';

const MovieList = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Goodfellas', year: 1999, director: 'Martin Scorcese' },
    { id: 2, title: 'Apocalypse Now', year: 1979, director: 'Fracis Ford Coppola' },
    { id: 3, title: 'Mad Max: Fury Road', year: 2015, director: 'George Miller' },
    { id: 4, title: 'Lost in Translation', year: 2001, director: 'Sofia Coppola' },
    { id: 5, title: 'Toy Story', year: 2000, director: 'Pixar' },
  ])

  const removeMovieById = (id) => {
    console.log('✅ removeMovieById has been executed, ID:', id);
    const filteredArray = movies.filter(movie => movie.id !== id);
    setMovies(filteredArray);
    console.log('Filtered Array:', filteredArray);
  }

  return (
    <>
      <h2>Movie List</h2>
      {
        movies.map((movie, index) => (
          <MovieItem
            key={index}  // Never used inside the component, only used by react
            id={movie.id}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            remove={removeMovieById}
          />
        ))
      }
    </>
  );
}

export default MovieList;
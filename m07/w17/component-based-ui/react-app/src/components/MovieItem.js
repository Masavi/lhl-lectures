const MovieItem = ({ title, year, director, id, remove }) => {
  return (
    <article style={{
      backgroundColor: 'gray',
      color: 'white',
      padding: '12px',
      marginTop: '12px',
    }}>
      <h3>{title}</h3>
      <p>{year} - {director}</p>
      <button onClick={() => remove(id)}>
        Delete
      </button>
    </article>
  );
}

export default MovieItem;

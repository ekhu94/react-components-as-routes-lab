import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderedMovies = movies.map(m => {
    const renderedGenres = m.genres.map(g => <li key={g}>{g}</li>)
    return (
      <div key={m.title}>
        <h3>{m.title}</h3>
        <p>{m.time}</p>
        <ul>
          {renderedGenres}
        </ul>
      </div>
    );
  })
  return (
    <div>
        <h1>Movies Page</h1>
        {renderedMovies}
    </div>
  );
};

export default Movies;

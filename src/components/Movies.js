import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderedMovies = movies.map(m => {
    const renderedGenres = m.genres.map(g => {
      return <li key={g}>{g}</li>
    });
    return (
      <div key={m.title}>
        <h4>{m.title}</h4>
        <p>Running Time: {m.time}</p>
        <ul>
          {renderedGenres}
        </ul>
      </div>
    );
  });
  return (
    <div>
        <h1>Movies Page</h1>
        {renderedMovies}
    </div>
  );
};

export default Movies;

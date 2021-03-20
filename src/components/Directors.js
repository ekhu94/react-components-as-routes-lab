import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderedDirectors = directors.map(d => {
    const renderedMovies = d.movies.map(m => {
      return <li key={m}>{m}</li>
    });
    return (
      <div key={d.name}>
        <h4>{d.name}</h4>
        <ul>
          {renderedMovies}
        </ul>
      </div>
    );
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {renderedDirectors}
    </div>
  );
}

export default Directors

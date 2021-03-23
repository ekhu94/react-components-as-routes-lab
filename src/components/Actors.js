import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderedActors = actors.map(a => {
    const renderedMovies = a.movies.map(m => <li key={m}>{m}</li>);
    return (
      <div key={a.name}>
        <h4>{a.name}</h4>
        <ul>
          {renderedMovies}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {renderedActors}
    </div>
  );
};

export default Actors;

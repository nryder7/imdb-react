import React, { useState } from 'react';
// import { useFetch } from './useFetch';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { isLoading, movies } = useGlobalContext();
  if (isLoading) {
    return <div className='loading'></div>;
  }

  return (
    <div className='movies'>
      {movies &&
        movies.map((movie) => {
          const {
            Poster: poster,
            Title: title,
            Type: type,
            Year: year,
            imdbID: id,
          } = movie;

          return (
            <Link className='movie' key={id} to={`/movies/${id}`}>
              <div className='img-container'>
                <img
                  className='movie-img'
                  src={poster === 'N/A' ? url : poster}
                  alt={title}
                />
              </div>
              <div className='movies-info'>
                <h4>{title}</h4>
                <p>{year}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Movies;

// <Link to=''>
//   <p>{poster}</p>
//   <p>{title}</p>
//   <p>{type}</p>
//   <p>{year}</p>
//   <p>{id}</p>
// <Link/>

// <>
//   <p>{poster}</p>
//   <p>{title}</p>
//   <p>{type}</p>
//   <p>{year}</p>
//   <p>{id}</p>
// </>;

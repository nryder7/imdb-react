import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from './useFetch';

const SingleMovie = () => {
  const { id } = useParams();
  const { isError, isLoading, data: movie } = useFetch(`&i=${id}`);
  console.log(isError, isLoading, movie);

  useEffect(() => {}, [id]);

  if (isError.show) {
    return (
      <div>
        <p>{isError.msg}</p>
        <Link to='/'>
          <button className='btn'>home</button>
        </Link>
      </div>
    );
  }
  if (isLoading) {
    return <div className='loading'></div>;
  }
  const {
    Actors: actors,
    Awards: awards,
    BoxOffice: boxOffice,
    Country: country,
    Director: director,
    Genre: genre,
    Language: language,
    Metascore: metascore,
    Plot: plot,
    Poster: poster,
    Production: production,
    Rated: rated,
    Released: released,
    Response: response,
    Runtime: runtime,
    Title: title,
    Website: website,
    Writer: writer,
    Year: year,
    imdbID: imdbID,
    imdbRating: imdbRating,
    imdbVotes: imdbVotes,
  } = movie;

  return (
    <>
      <div className='single-movie'>
        <img src={poster} alt={title} />
        <div>
          <h4>{title}</h4>
          <p>{year}</p>
          <p>{runtime}</p>
          <p>{plot}</p>
          <p>{actors}</p>
          <Link to='/'>
            <button className='btn'>home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;

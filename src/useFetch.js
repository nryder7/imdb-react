import React, { useState, useContext, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: '' });
  const [data, setData] = useState();

  const fetchMovie = async (str) => {
    let url = API_ENDPOINT;
    url += str;
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (data.Response === 'True') {
        setData(data.Search || data);
        setIsError({ show: false, msg: '' });
      }
      if (data.Response === 'False') {
        setIsError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovie(id);
  }, [id]);
  return { isError, isLoading, data };
};

// if (type === 'title') {
//   url += `&s=${value}`;
// }
// if (type === 'id') {
//   url += `&i=${value}`;
// }

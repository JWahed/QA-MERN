/* eslint-disable no-console */
import { useState } from 'react';
import ListMovies from './ListMovies';

const axios = require('axios');

function FilmRequest() {
  const [data, setData] = useState([]);
  const [filmTitle, setFilmTitle] = useState('');

  const updateFilmTitle = (e) => {
    setFilmTitle(e.target.value);
  };
  const request = async () => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=8a2571cb&s=${filmTitle}`);
      setData(res.data.Search);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2>Film Request</h2>
      <input
        type="text"
        placeholder="Search movie title here..."
        onChange={
            (e) => updateFilmTitle(e)
        }
      />
      <button
        type="button"
        onClick={
          () => request()
        }
      >
        Search
      </button>
      {data.length === 0
        ? <p>Search for your favourite movies</p>
        : <ListMovies data={data} />}
    </>
  );
}

export default FilmRequest;

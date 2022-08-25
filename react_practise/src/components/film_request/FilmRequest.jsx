import { useEffect, useState } from 'react';

const axios = require('axios');

function FilmRequest() {
  const [data, setData] = useState([]);
  const [filmTitle, setFilmTitle] = useState('');

  const {
    Title, Rated, Year, Plot,
  } = data;

  const updateFilmTitle = (e) => {
    e.preventDefault();
    setFilmTitle(e.target.value);
  };
  const request = async () => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=8a2571cb&t=${filmTitle}`);
      setData(res.data);
      console.log(res.data);
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
      <p>
        Title:
        {' '}
        {Title}
      </p>
      <p>
        Rated:
        {' '}
        {Rated}
      </p>
      <p>
        Year:
        {' '}
        {Year}
      </p>
      <p>
        Plot:
        {' '}
        {Plot}
      </p>
    </>
  );
}

export default FilmRequest;

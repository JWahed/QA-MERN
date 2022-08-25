import { useEffect, useState } from 'react';

const axios = require('axios');

function FilmRequest() {
  const [data, setData] = useState([]);
  const [filmTitle, setFilmTitle] = useState('');

  const updateFilmTitle = (e) => {
    e.preventDefault();
    setFilmTitle(e.target.value);
  };
  const request = async () => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=c4fe7f18=${filmTitle}`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    request();
  }, [filmTitle]);

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
      <p>{data.Title}</p>
      <p>{data.Rated}</p>
      <p>{data.Year}</p>
      <p>{data.Plot}</p>
    </>
  );
}

export default FilmRequest;

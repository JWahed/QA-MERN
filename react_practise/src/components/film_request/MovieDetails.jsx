import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HideText from '../hooks_exercise/HideText';

function MovieDetails() {
  const [data, setData] = useState([]);
  const { imdbID } = useParams();

  const request = async () => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=8a2571cb&i=${imdbID}`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <>
      <img src={data.Poster} alt="Poster" />
      <h1>{`Title: ${data.Title}`}</h1>
      <h2>{`Rated: ${data.Rated}`}</h2>
      <h2>{`Released: ${data.Released}`}</h2>
      <h2>{`Runtime: ${data.Runtime}`}</h2>
      <h2>{`Actors: ${data.Actors}`}</h2>
      <h2>{`BoxOffice: ${data.BoxOffice}`}</h2>
      <h2>{`Genre: ${data.Genre}`}</h2>
      <h2>{`MetaScore: ${data.Metascore}`}</h2>
      <h2><HideText text={data.Plot} end={20} /></h2>
      <h2>{`IMDB Rating: ${data.imdbRating}`}</h2>
    </>
  );
}

export default MovieDetails;

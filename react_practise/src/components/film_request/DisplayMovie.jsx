import { useNavigate } from 'react-router-dom';

function DisplayMovie({
  id, title, rated, year,
}) {
  const navigate = useNavigate();
  return (
    <li>
      {title}
      ,
      {rated}
      ,
      {year}
      ,
      <button type="button" onClick={() => navigate(`/film_request/${id}`)}>Details</button>
    </li>
  );
}

export default DisplayMovie;

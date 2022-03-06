//import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { DetailsContainer } from './styles';

function Details() {
  const { id } = useParams()
  let navigate = useNavigate()

  function handleButtonClick() {
    navigate('/')
  }

  const movie = {
    id,
    title: 'Spider Man',
    image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    sinopse: 'filme otimo eu amei',
    releaseDate: '15/12/2021'
  }
  
  return (
    <DetailsContainer>
      <div className="movie">
      <img src={movie.image} alt={movie.sinopse}/>
      <div className="details">
        <h1>{movie.title}</h1>
        <span>Sinopse: {movie.sinopse}</span>
        <span className='release-date'>Release date: {movie.releaseDate}</span>
        <button onClick={handleButtonClick}>Voltar</button>
      </div>
    </div>
    </DetailsContainer>
  );
}

export default Details;

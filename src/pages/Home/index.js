import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APIkey } from '../../config/key';
import { HomeContainer } from './styles';


function Home() {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  return (
    <HomeContainer>
      <h1>Movies</h1>
      <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
          </li>
        )
      })}
      </ul>
    </HomeContainer>
  );
}

export default Home;

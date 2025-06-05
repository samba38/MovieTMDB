import {Link} from 'react-router-dom'
import './index.css'

const TopRatedMovies = props => {
  const {topRatedDetails} = props
  const {
    title,
    posterPath,
    voteAverage,
    overview,
    releaseDate,
    id,
    originalLanguage,
    backdropPath,
  } = topRatedDetails
  const poster = `https://image.tmdb.org/t/p/w500${posterPath}`
  return (
    <li className="top-rated-movie-list-container">
      <img src={poster} className="top-rated-movie-img" />
      <h1 className="top-rated-movie-heading">{title}</h1>
      <p className="top-rated-movie-date">
        <span className="top-rated-movie-date-span">Release Date:</span>
        {releaseDate}
      </p>
      <p className="top-rated-movie-rating">{voteAverage} Rating</p>
      <Link to={`/movies/${id}`} className="linkered">
        <button className="top-rated-movie-details-btn">View Details</button>
      </Link>
    </li>
  )
}

export default TopRatedMovies

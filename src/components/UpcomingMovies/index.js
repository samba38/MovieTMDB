import {Link} from 'react-router-dom'
import './index.css'

const UpcomingMovies = props => {
  const {upcomingDetails} = props
  const {
    title,
    posterPath,
    voteAverage,
    overview,
    releaseDate,
    id,
    originalLanguage,
    backdropPath,
  } = upcomingDetails
  const poster = `https://image.tmdb.org/t/p/w500${posterPath}`
  return (
    <li className="upcoming-movie-list-container">
      <img src={poster} className="upcoming-movie-img" />
      <h1 className="upcoming-movie-heading">{title}</h1>
      <p className="upcoming-movie-date">
        <span className="upcoming-movie-date-span">Release Date:</span>
        {releaseDate}
      </p>
      <p className="upcoming-movie-rating">{voteAverage} Rating</p>
      <Link to={`/movies/${id}`} className="linkered">
        <button className="upcoming-movie-details-btn">View Details</button>
      </Link>
    </li>
  )
}

export default UpcomingMovies

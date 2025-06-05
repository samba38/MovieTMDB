import {Link} from 'react-router-dom'
import './index.css'

const SearchItems = props => {
  const {searchDetails} = props
  const {
    title,
    posterPath,
    voteAverage,
    overview,
    releaseDate,
    id,
    originalLanguage,
  } = searchDetails
  const poster = `https://image.tmdb.org/t/p/w500${posterPath}`
  return (
    <li className="searched-movie-list-container">
      <img src={poster} className="searched-movie-img" />
      <h1 className="searched-movie-heading">{title}</h1>
      <p className="searched-movie-date">
        <span className="searched-movie-date-span">Release Date:</span>
        {releaseDate}
      </p>
      <p className="searched-movie-rating">{voteAverage} Rating</p>
      <Link to={`/movies/${id}`} className="linkered">
        <button className="searched-movie-details-btn">View Details</button>
      </Link>
    </li>
  )
}

export default SearchItems

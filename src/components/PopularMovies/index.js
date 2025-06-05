import {Link} from 'react-router-dom'
import React, {useContext} from 'react'
import SearchContext from '../../Context/SearchContext'
import './index.css'

const PopularMovies = props => {
  const {popularDetails} = props
  const {
    title,
    posterPath,
    voteAverage,
    overview,
    releaseDate,
    originalLanguage,
    id,
    backdropPath,
  } = popularDetails
  const poster = `https://image.tmdb.org/t/p/w500${posterPath}`
  const {searchInputs} = useContext(SearchContext)
  return (
    <li className="popular-movie-list-container">
      <img src={poster} className="popular-movie-img" />
      <h1 className="popular-movie-title">{title}</h1>
      <p className="popular-movie-date">
        <span className="popular-movie-date-span">Release Date:</span>
        {releaseDate}
      </p>

      <p className="popular-movie-rating">{voteAverage} Rating</p>
      <Link to={`/movies/${id}`} className="linkered">
        <button className="popular-movie-details-btn">View Details</button>
      </Link>
    </li>
  )
}

export default PopularMovies

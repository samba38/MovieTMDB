import './index.css'

const MovieCast = props => {
  const {castDetails} = props
  const {character, profilePath, originalName} = castDetails
  const poster = `https://image.tmdb.org/t/p/original/${profilePath}`
  return (
    <li className="movie-cast-details">
      <img src={poster} className="cast-poster-img" />
      <h1 className="movie-cast-name">
        <span className="cast-movie-card-span">Name:</span>
        {originalName}
      </h1>
      <p className="movie-cast-charcter">
        <span className="cast-movie-card-span">Charter Name:</span>
        {character}
      </p>
    </li>
  )
}

export default MovieCast

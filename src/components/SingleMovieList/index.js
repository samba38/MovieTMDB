import './index.css'

const SingleMovieList = props => {
  const {singleMovieList, generData} = props
  const {
    title,
    posterPath,
    budget,
    voteAverage,
    runtime,
    releaseDate,
    overview,
  } = singleMovieList
  console.log(generData)
  const poster = `https://image.tmdb.org/t/p/w500${posterPath}`
  const renderItems = () => (
    <div className="gener-side">
      {generData.map(eachItem => (
        <h1 className="gener-type">{eachItem.name}</h1>
      ))}
    </div>
  )
  return (
    <div className="single-movie-container">
      <div className="single-movie-card">
        <img src={poster} className="single-movie-poster" />
        <div className="single-movie-card-desperation">
          <h1 className="single-movie-card-heading">{title}</h1>
          <p className="single-movie-card-overview">{overview}</p>
          <p className="single-movie-card-rating">
            <span className="single-movie-card-span">Rating:</span>
            {voteAverage}
          </p>
          <p className="single-movie-card-duration">
            <span className="single-movie-card-span">Duration:</span>
            {runtime} M
          </p>
          <p className="single-movie-card-date">
            <span className="single-movie-card-span">Release Date:</span>
            {releaseDate}
          </p>
          <div className="gener-side">
            <p className="single-movie-card-gener">Gener:</p>
            {renderItems()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleMovieList

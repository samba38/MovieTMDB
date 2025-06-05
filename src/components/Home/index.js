import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import PopularMovies from '../PopularMovies'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}
class Home extends Component {
  state = {popularList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getPopularDetails()
  }

  getPopularDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const keyApi = '674cce7d4bc2eb26acce98e23a8695f9'
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&language=en-US&page=1`
    const response = await fetch(apiUrl)
    const fetchData = await response.json()
    console.log(fetchData)
    const updateData = fetchData.results.map(eachItem => ({
      adult: eachItem.adult,
      backdropPath: eachItem.backdrop_path,
      id: eachItem.id,
      originalLanguage: eachItem.original_language,
      originalTitle: eachItem.original_title,
      overview: eachItem.overview,
      popularity: eachItem.popularList,
      posterPath: eachItem.poster_path,
      releaseDate: eachItem.release_date,
      title: eachItem.title,
      voteAverage: eachItem.vote_average,
    }))
    this.setState({
      popularList: updateData,
      apiStatus: apiStatusConstants.success,
    })
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderPopularMovieDetails = () => {
    const {popularList} = this.state
    return (
      <>
        <h1 className="popular-heading-movies">Popular</h1>
        <ul className="unorder-popular-movie-list">
          {popularList.map(eachList => (
            <PopularMovies key={eachList.id} popularDetails={eachList} />
          ))}
        </ul>
      </>
    )
  }

  renderAllProducts = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPopularMovieDetails()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div>{this.renderAllProducts()}</div>
      </>
    )
  }
}

export default Home

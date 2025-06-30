import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TopRatedMovies from '../TopRatedMovies'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}
class TopRated extends Component {
  state = {
    topRatedList: [],
    apiStatus: apiStatusConstants.initial,
    pageNumber: 1,
  }

  componentDidMount() {
    this.getTopRatedDetails()
  }

  onChangePageIncrese = () => {
    this.setState(
      prevState => ({pageNumber: prevState.pageNumber + 1}),
      this.getTopRatedDetails,
    )
  }

  onChangePageDcrese = () => {
    const {pageNumber} = this.state
    if (pageNumber > 1) {
      this.setState(
        prevState => ({pageNumber: prevState.pageNumber - 1}),
        this.getTopRatedDetails,
      )
    } else {
      this.setState({pageNumber: 1})
    }
  }

  getTopRatedDetails = async () => {
    const {pageNumber} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const keyApi = '674cce7d4bc2eb26acce98e23a8695f9'
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${keyApi}&language=en-US&page=${pageNumber}`
    const response = await fetch(apiUrl)
    const fetchData = await response.json()
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
      voteCount: eachItem.vote_count,
    }))
    console.log(updateData)
    this.setState({
      topRatedList: updateData,
      apiStatus: apiStatusConstants.success,
    })
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderTopRatedMovieDetails = () => {
    const {topRatedList, pageNumber} = this.state

    return (
      <>
        <h1 className="top-rated-heading">Top Rated</h1>
        <p className="top-rated-heading">{pageNumber}</p>
        <ul className="unorder-top-movie-list">
          {topRatedList.map(eachList => (
            <TopRatedMovies key={eachList.id} topRatedDetails={eachList} />
          ))}
        </ul>
        <div className="page-naviga-card">
          <button
            type="button"
            className="page-nav-btn"
            onClick={this.onChangePageDcrese}
          >
            previous
          </button>
          <button
            type="button"
            className="page-nav-btn"
            onClick={this.onChangePageIncrese}
          >
            Next
          </button>
        </div>
      </>
    )
  }

  renderAllProducts = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTopRatedMovieDetails()
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

export default TopRated

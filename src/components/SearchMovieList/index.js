import {Component} from 'react'
import SearchItems from '../SearchItems'
import Header from '../Header'
import './index.css'

class SearchMovieList extends Component {
  state = {searchList: []}

  componentDidMount() {
    this.getProductsItem()
  }

  getProductsItem = async () => {
    const {searchInputs} = this.props
    console.log(searchInputs)
    const keyApi = '674cce7d4bc2eb26acce98e23a8695f9'
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&language=en-US&query=${searchInputs}&page=1`
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
    this.setState({searchList: updateData})
  }

  renderSearchedItems = () => {
    const {searchList} = this.state
    const objFilter = searchList.filter(
      eachObj => eachObj.backdropPath !== null,
    )
    return (
      <ul className="unorder-searched-movie-list">
        {objFilter.map(eachList => (
          <SearchItems key={eachList.id} searchDetails={eachList} />
        ))}
      </ul>
    )
  }

  render() {
    const {searchInputs} = this.props
    return (
      <>
        <Header />
        {this.renderSearchedItems()}
      </>
    )
  }
}

export default SearchMovieList

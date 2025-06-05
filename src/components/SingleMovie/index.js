import {Component} from 'react'
import Header from '../Header'
import SingleMovieList from '../SingleMovieList'
import MovieCast from '../MovieCast'
import './index.css'

class SingleMovie extends Component {
  state = {singleMovieList: {}, castMovieList: [], generData: []}

  componentDidMount() {
    this.getSingleMovieDetails()
    this.getCastDetails()
  }

  getSingleMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const keyApi = '674cce7d4bc2eb26acce98e23a8695f9'
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${keyApi}&language=en-US`
    const response = await fetch(apiUrl)
    const fetchData = await response.json()
    const updateData = {
      adult: fetchData.adult,
      backdropPath: fetchData.backdrop_path,
      id: fetchData.id,
      budget: fetchData.budget,
      originalLanguage: fetchData.original_language,
      originalTitle: fetchData.original_title,
      overview: fetchData.overview,
      popularity: fetchData.popularList,
      posterPath: fetchData.poster_path,
      releaseDate: fetchData.release_date,
      title: fetchData.title,
      voteAverage: fetchData.vote_average,
      voteCount: fetchData.vote_count,
      runtime: fetchData.runtime,
    }
    const dataUpdate = fetchData.genres.map(eachGen => ({
      id: eachGen.id,
      name: eachGen.name,
    }))

    console.log(updateData)
    this.setState({singleMovieList: updateData, generData: dataUpdate})
  }

  getCastDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const keyApi = '674cce7d4bc2eb26acce98e23a8695f9'
    const apUril = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keyApi}&language=en-US`
    const response = await fetch(apUril)
    const fetchData = await response.json()

    const updatedCast = fetchData.cast.map(eachCast => ({
      adult: eachCast.adult,
      castId: eachCast.cast_id,
      character: eachCast.character,
      id: eachCast.id,
      knownForDepartment: eachCast.known_for_department,
      name: eachCast.name,
      originalName: eachCast.original_name,
      profilePath: eachCast.profile_path,
    }))

    this.setState({castMovieList: updatedCast})
  }

  renderSingleMovieMovieDetails = () => {
    const {singleMovieList, generData} = this.state

    return (
      <SingleMovieList
        singleMovieList={singleMovieList}
        generData={generData}
      />
    )
  }

  renderMovieCastDetails = () => {
    const {castMovieList} = this.state
    const filterObj = castMovieList.filter(
      eachMap => eachMap.profilePath !== null,
    )

    return (
      <ul className="unorder-cast-list">
        {filterObj.map(eachList => (
          <MovieCast key={eachList.id} castDetails={eachList} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <Header />
        <div>{this.renderSingleMovieMovieDetails()}</div>
        <div>{this.renderMovieCastDetails()}</div>
      </>
    )
  }
}

export default SingleMovie

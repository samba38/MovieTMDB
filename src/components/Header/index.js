import {Link, withRouter} from 'react-router-dom'
import React, {useContext} from 'react'

import SearchContext from '../../Context/SearchContext'
import './index.css'

const Header = props => {
  const {changeSearchInput, searchInputs} = useContext(SearchContext)
  const onChangeSearch = event => {
    changeSearchInput(event.target.value)
  }
  const onClickSearch = () => {
    const {history} = props
    history.replace('/search')
  }
  return (
    <nav className="movie-nav-container">
      <div className="movie-nav-container-cart">
        <h1 className="movie-nav-container-heading">movieDB</h1>
      </div>
      <div className="movie-nav-container-cart">
        <div className="input-search-container">
          <input
            type="search"
            className="movie-nav-container-search"
            onChange={onChangeSearch}
            value={searchInputs}
          />
          <button
            className="movie-nav-search-btn"
            type="button"
            onClick={onClickSearch}
          >
            Search
          </button>
        </div>
        <ul className="movie-nav-container-unorderList">
          <Link to="/" className="linker">
            <li className="movie-nav-container-lists">Popular</li>
          </Link>
          <Link to="/top-rated" className="linker">
            <li className="movie-nav-container-lists">Top Rated</li>
          </Link>
          <Link to="/upcoming" className="linker">
            <li className="movie-nav-container-lists">Upcoming</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)

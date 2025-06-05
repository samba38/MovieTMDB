import React, {useContext} from 'react'
import SearchContext from '../../Context/SearchContext'
import SearchMovieList from '../SearchMovieList'

const SearchedMovies = () => {
  const {searchInputs} = useContext(SearchContext)
  const renderSearch = () => <SearchMovieList searchInputs={searchInputs} />
  return <>{renderSearch()}</>
}
export default SearchedMovies

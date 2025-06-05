import React from 'react'

const SearchContext = React.createContext({
  searchInputs: '',
  changeSearchInput: () => {},
})

export default SearchContext

import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import SearchedMovies from './components/SearchedMovies'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import SingleMovie from './components/SingleMovie'
import SearchContext from './Context/SearchContext'
import './App.css'

// write your code here
class App extends Component {
  state = {searchInputs: ''}

  changeSearchInput = taegget => {
    this.setState({searchInputs: taegget})
  }

  render() {
    const {searchInputs} = this.state
    return (
      <SearchContext.Provider
        value={{
          searchInputs,
          changeSearchInput: this.changeSearchInput,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/top-rated" component={TopRated} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/movies/:id" component={SingleMovie} />
          <Route exact path="/search" component={SearchedMovies} />
        </Switch>
      </SearchContext.Provider>
    )
  }
}

export default App

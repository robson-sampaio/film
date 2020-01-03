import React, { Component } from 'react';
import './App.css';
import UpperMenu from './components/UpperMenu/UpperMenu';
import SearchArea from './components/SearchArea/SearchArea';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      searchTerms: ''
    }  
    this.apiKey = "95e310c9cdf43a266b381436c3d83fc8"//process.env.THE_MOVIE_DB_API
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerms}`)
    .then(results => results.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results]})
    })
  }

  handleChange(e){
    this.setState({searchTerms: e.target.value})
  }

  render(){
    return (
      <div>
        <UpperMenu/>
        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    )};
}

export default App;

import React, { Component } from 'react';
import './App.css';
import UpperMenu from './components/UpperMenu/UpperMenu';
import FilmeList from './components/FilmList/FilmeList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      films: [],
      searchTerms: ''
    } 
    this.apiKey = process.env.REACT_APP_THE_MOVIE_DB_API;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
    .then(results => results.json())
    .then(data => {
      this.setState({films: [...data.results]})
    })
  }

  handleGenrer(){
    fetch(``)
    .then(results => results.json())
    .then(data => {
        this.setState({films: [...data.results]})
    })
}

  handleSubmit(e){
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerms}`)
    .then(results => results.json())
    .then(data => {
      console.log(data);
      this.setState({films: [...data.results]})
    })
  }

  handleChange(e){
    this.setState({searchTerms: e.target.value})
  }

  render(){
    return (
      <div>
        <UpperMenu handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <FilmeList films={this.state.films}/>
      </div>
    )};
}

export default App;

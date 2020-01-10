import React, { Component } from 'react';
import './App.css';
import UpperMenu from './components/UpperMenu/UpperMenu';
import Panel from './components/Panel/Panel'
import {URL_API} from '../src/services/base'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      films: [],
      searchTerms: '',
      genreId: '', 
      genreList: []
    } 
    this.apiKey = process.env.REACT_APP_THE_MOVIE_DB_API;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getGenreId = this.getGenreId.bind(this);
    this.getGenreList = this.getGenreList.bind(this);
  }

  componentDidMount(){
    fetch(`${URL_API}movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
    .then(results => results.json())
    .then(data => {
      this.setState({films: [...data.results]})
    })
  }

  getGenreId(e){
    var i;
    for(i = 0; i < this.state.genreList.length; i++){
      if(this.state.genreList[i].name === e.target.textContent){
        this.filmsByGenre(this.state.genreList[i].id)
      }
    }
  }

  getGenreList(genres){
    this.setState({genreList: genres})
  }

  filmsByGenre(id){
    fetch(`${URL_API}discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
    .then(results => results.json())
    .then(data => {
        this.setState({films: data.results})
    })
  }

  handleSubmit(e){
    e.preventDefault();
    fetch(`${URL_API}search/movie?api_key=${this.apiKey}&query=${this.state.searchTerms}`)
    .then(results => results.json())
    .then(data => {
      this.setState({films: [...data.results]})
    })
  }

  handleChange(e){
    this.setState({searchTerms: e.target.value})
  }

  render(){
    return (
      <div>
        <UpperMenu handleSubmit={this.handleSubmit} 
                   handleChange={this.handleChange} 
                   getGenreId={this.getGenreId}
                   filmsByGenre={this.filmsByGenre}
                   getGenreList={this.getGenreList}/>
        <Panel films={this.state.films}/>
        {/* <FilmeList films={this.state.films}/> */}
        
      </div>
    )};
}

export default App;

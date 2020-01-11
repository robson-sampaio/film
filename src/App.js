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
                   handleChange={this.handleChange}/>
        <Panel/>
        {/* <FilmeList films={this.state.films}/> */}
        
      </div>
    )};
}

export default App;

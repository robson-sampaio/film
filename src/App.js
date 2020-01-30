import React, { Component } from 'react';
import UpperMenu from './components/UpperMenu/UpperMenu';
import Panel from './components/Panel/Panel';
import { URL_API } from './services/base';
import { Switch, Route, withRouter } from 'react-router-dom';
import PanelSearch from './components/Panel/PanelSearch';
import Test from './components/Test/Test'
import './App.css';
import './components/FilmsCarousel/FilmsCarousel.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      films: [],
      searchTerms: 'tet',
      genreId: '', 
      genreList: [],
      filmDetails: '' 
    } 
    this.apiKey = process.env.REACT_APP_THE_MOVIE_DB_API;
  }

  componentDidMount() {
    fetch(`${URL_API}/genre/movie/list?api_key=${this.apiKey}&language=en-US`) // getting genre list from API
    .then(results => results.json())
    .then(data => {   
        this.setState({genreList: [...data.genres]})
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${URL_API}/search/movie?api_key=${this.apiKey}&language=en-US&query=${this.state.searchTerms}&page=1&include_adult=true`)
    .then(results => results.json())
    .then(data => {
      this.setState({films: [...data.results]})      
      this.props.history.push('/PanelSearch');
    }) 
  }

  handleChange = (e) => {
      this.setState({searchTerms: e.target.value})
  }

  handleClick = (e) => {
    // e.preventDefault();
    // this.setState({filmDetails: e.target.value})
    console.log(e.props.film)
  }

  render(){
    return (
      <div>
        <UpperMenu handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <div className="panel">
          <Switch>
            {/* <Route path="/Test"><Test msg="sera?" handleClick={this.handleClick} searchTerms={this.state.searchTerms}/></Route> */}
            <Route path="/PanelSearch"><PanelSearch handleClick={this.handleClick} films={this.state.films}/></Route>
            <Route path="/"><Panel isTrue={this.state.isTrue} handleClick={this.handleClick} genreList={this.state.genreList} films={this.state.films}/></Route>
          </Switch>        
        </div>
      </div>
    )};
}

export default withRouter(App);

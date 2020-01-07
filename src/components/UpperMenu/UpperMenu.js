import React, { Component } from 'react';
import SearchArea from '../SearchArea/SearchArea'
import Genres from '../Genres/Genres'
import {URL_API} from '../../services/base'

class UpperMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            genres: [],
            genreId: ''
         }
         this.apiKey = process.env.REACT_APP_THE_MOVIE_DB_API;
    }

    componentDidMount(){
        fetch(`${URL_API}genre/movie/list?api_key=${this.apiKey}`)
        .then(results => results.json())
        .then(data => {
            this.setState({genres: [...data.genres]})
            this.props.getGenreList(this.state.genres)
        })
    }
    
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a href="/" className="navbar-brand">Querubinha Filmes</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Genres
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {
                                    this.state.genres.map((genre, i) => {
                                        return <Genres key={i} 
                                                       genres={genre} 
                                                       getGenreId={this.props.getGenreId}
                                                       filmsByGenre={this.props.filmsByGenre}/>;
                                    })
                                }
                            </div>
                        </li>
                    </ul>
                </div>
                <SearchArea handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}/>
            </nav>
         );
    }
}
 
export default UpperMenu;
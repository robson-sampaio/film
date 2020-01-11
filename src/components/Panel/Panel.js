import React, { Component } from 'react';
import FilmsCarousel from './../FilmsCarousel/FilmsCarousel'
import {URL_API} from './../../services/base'


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            films: [],
            genreList: []
         }
        this.apiKey = process.env.REACT_APP_THE_MOVIE_DB_API;
    }

    componentDidMount() {
        fetch(`${URL_API}genre/movie/list?api_key=${this.apiKey}&language=en-US`) // getting genre list from API
        .then(results => results.json())
        .then(data => {            
            this.setState({genreList: [...data.genres]})
        })
    }// I am getting the genre list in here because I will display the movies by genre inside a carousel for each genre

    render() { 
        return ( 
            <div className="container">
                <ul className="list-group list-group">
                    {
                        this.state.genreList.map((genre, i) => {
                            return (
                                <div className="container my-2">
                                    <div className="row-header-title">{genre.name}</div>
                                    <li key={i} className="list-group-item">
                                        <FilmsCarousel id={genre.id} listRef={genre.name}/>
                                    </li>
                                </div> 
                            )
                        })
                    } 
                </ul>
            </div>
            
         );
    }
}
 
export default Panel;
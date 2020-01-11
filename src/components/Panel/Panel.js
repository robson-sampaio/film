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
        fetch(`${URL_API}genre/movie/list?api_key=${this.apiKey}&language=en-US`)
        .then(results => results.json())
        .then(data => {
            this.setState({genreList: data.genres})
        })
    }

    render() { 
        return ( 
            <div className="container">
                <ul className="list-group list-group">
                    {
                        this.state.genreList.map((genre, i) => {
                            return (
                                <li className="list-group-item">
                                    <FilmsCarousel key={i} films={this.props.films} listRef={genre.name} genreId={genre.id}/>
                                </li> 
                            )
                        })
                    } 
                </ul>
            </div>
            
         );
    }
}
 
export default Panel;
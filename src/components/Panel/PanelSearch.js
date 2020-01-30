import React, { Component } from 'react';
import FilmList from './../FilmList/FilmeList'

class PanelSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            films: []
         }
        this.apiKey = process.env.REACT_APP_THE_MOVIE_DB_API;
    }

    render() { 
        return (
                <div className="container-fluid">
                    <div className="row align-items-center">
                            {
                                this.props.films.map((film, i) => {                                                                      
                                        return (                                    
                                                <FilmList key={i} index={i} image={film.poster_path} film={film} handleClick={this.props.handleClick}/>      
                                        )                                                                                                  
                                })
                            }
                    </div>
                </div>
         );
    }
}
 
export default PanelSearch;
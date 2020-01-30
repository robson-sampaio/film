import React, { Component } from 'react';
import Film from './../Film/Film';
import {URL_API} from './../../services/base'

class FilmsCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            films: []
         }
        this.apiKey = process.env.REACT_APP_THE_MOVIE_DB_API;
    }

    componentDidMount(){
        fetch(`${URL_API}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.id}`)
        .then(results => results.json())
        .then(data => {
            this.setState({films: data.results})
        })
    }

    render() { 
        return ( 
            <div className="container-fluid">
                <div id={this.props.listRef} className="carousel slide" data-ride="carousel" data-interval="false">
                    <ol className="carousel-indicators">
                        <li data-target={"#" + this.props.listRef} data-slide-to="0" className="active"></li>
                        <li data-target={"#" + this.props.listRef} data-slide-to="1"></li>
                        <li data-target={"#" + this.props.listRef} data-slide-to="2"></li>
                        <li data-target={"#" + this.props.listRef} data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                {
                                    this.state.films.map((film, i) => {
                                        if(i < 5){                                        
                                            return (
                                                <Film handleClick={this.props.handleClick} key={i} index={i} image={film.poster_path} film={film}/>
                                            )
                                        }
                                        else{
                                            return null;
                                        }
                                    })
                                }
                            </div>                            
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                {
                                    this.state.films.map((film, i) => {
                                        if(i >= 5 && i < 10){                                        
                                            return (
                                                <Film key={i} image={film.poster_path} films={this.props.films}/>
                                            )
                                        }
                                        else{
                                            return null;
                                        }
                                    })
                                }
                            </div>                            
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                {
                                    this.state.films.map((film, i) => {
                                        if(i >= 10 && i < 15){                                        
                                            return (
                                                <Film key={i} image={film.poster_path} films={this.props.films}/>
                                            )
                                        }
                                        else{
                                            return null;
                                        }
                                    })
                                }
                            </div>                            
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                {
                                    this.state.films.map((film, i) => {
                                        if(i >= 15 && i < 20){                                        
                                            return (
                                                <Film key={i} image={film.poster_path} films={this.props.films}/>
                                            )
                                        }
                                        else{
                                            return null;
                                        }
                                    })
                                }
                            </div>                            
                        </div>
                    </div>
                    <a className="carousel-control-prev" href={"#" + this.props.listRef} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={"#" + this.props.listRef} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
               
         );
    }
}
 
export default FilmsCarousel;
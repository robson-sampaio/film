import React, { Component } from 'react';
import FilmeList from '../FilmList/FilmeList';

class Genres extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            films: []
         }
    }

    render() { 
        return (
            <a className="dropdown-item" href="/">
                {
                    this.props.genres.name
                }
            </a>
         );
    }
}
 
export default Genres;
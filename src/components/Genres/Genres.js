import React, { Component } from 'react';

class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
         }
    }

    render() { 
        return (
            <button type="button" className="dropdown-item" onClick={this.props.getGenreId}>
                {
                    this.props.genres.name
                }
            </button>
         );
    }
}
 
export default Genres;
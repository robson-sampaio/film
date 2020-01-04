import React, { Component } from 'react';

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return ( 
                <div className="col-sm-3">
                    <div class="card mb-3">
                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w185/${this.props.image}`} alt="poster"></img>
                    </div>
                </div>
         );
    }
}
 
export default Film;
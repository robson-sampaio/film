import React, { Component } from 'react';

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    show(item){
        console.log(item)
    }

    render() { 
        return ( 
            <div className="col-sm">
                {                                    
                    this.props.image == null && this.props.key <= 2 ? <img className="card img-top" src="./default-img.png" alt="poster"></img> : <img className="card-img-top d-block" src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} alt="poster"></img>
                }
            </div>                                     
         );
    }
}
 
export default Film;
import React, { Component } from 'react';

class FilmDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        if(this.props.isHovered){
            return ( 
                <div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        {/* <p className="card-text">{this.props.overview}</p> */}
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            );
        }else{
            return <div></div>
        }
    }
}
 
export default FilmDetails;
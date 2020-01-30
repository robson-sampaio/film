import React, { Component } from 'react';

class FilmeList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }    

    handleClick(e){
        console.log(e)
    }
    
    render() { 
        return ( 
                <div className="col-sm-2">
                    <div className="card-mb-2">
                        <img onClick={() => this.props.handleClick(this)} className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} alt="poster"></img>
                    </div>
                </div>
            );
        }
        
}
 
export default FilmeList;
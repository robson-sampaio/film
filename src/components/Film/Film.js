import React, { Component } from 'react';
import './default-img.png'

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render(){ 

        if(this.props.image){
            return (
                <div className="col" >
                    <img onClick={() => this.props.handleClick(this)} className="card-img-top d-block" src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} alt="poster"></img>
                </div>
            )
        }else{
            return (
                <div className="col" >
                    <img className="card-img-top" src="default-img.png" alt="poster"></img>
                </div>
                
            )
        }

        // return ( 
        //     <div className="col" >
        //         {   
        //             this.props.image == null ? <img className="card-img-top" src="default-img.png" alt="poster"></img> : <img onClick={() => this.props.handleClick(this)} className="card-img-top d-block" src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} alt="poster"></img>
        //         }
        //     </div>                                     
        //  );
    }
}
 
export default Film;
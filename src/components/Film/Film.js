import React, { Component } from 'react';
import FilmDetails from './FilmDetails';
import './default-img.png'

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false            
         }
    }

    render(){ 

        if(this.props.image){
            return (
                <div className="col" 
                onMouseOver={() => this.setState({hovered: true})}
                onMouseOut={() => this.setState({hovered: false})}>
                    <img onClick={() => this.props.handleClick(this)} className="card-img-top d-block" src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} alt="poster"></img>
                    <FilmDetails title={this.props.title} overview={this.props.overview} isHovered={this.state.hovered}/>                    
                </div>
            )
        }
        else{
            return (
                <div className="col" >
                    <img className="card-img-top" src="default-img.png" alt="poster"></img>
                </div>
                
            )
        }
    }
}
 
export default Film;
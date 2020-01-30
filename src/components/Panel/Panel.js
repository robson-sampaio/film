import React, { Component } from 'react';
import './Panel.css';
import FilmsCarousel from './../FilmsCarousel/FilmsCarousel';


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() { 
        return ( 
            <ul className="list-group">                
                {                    
                    this.props.genreList.map((genre, i) => {
                        return (
                            <div key={i} className="container my-2">
                                <div className="header-genre mb-2">{genre.name}</div>
                                <li className="list-group-item mb-2" style={{backgroundColor : "#b53434"}}>
                                    <FilmsCarousel id={genre.id} listRef={genre.name} handleClick={this.props.handleClick}/>
                                </li>
                            </div> 
                        )
                    })
                } 
            </ul>
         );
    }
}
 
export default Panel;
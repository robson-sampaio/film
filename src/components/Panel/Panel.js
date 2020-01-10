import React, { Component } from 'react';
import FilmsCarousel from './../FilmsCarousel/FilmsCarousel'


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <ul className="list-group list-group mx-2">
                    {
                        ['listGroup1', 'listGroup2', 'listGroup3', 'listGroup4'].map((list, i) => {
                            return (
                                <li className="list-group-item">
                                    <FilmsCarousel films={this.props.films} listRef={list}/>
                                </li> 
                            )
                        })
                    } 
                </ul>
            </div>
            
         );
    }
}
 
export default Panel;
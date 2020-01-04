import React, { Component } from 'react';
import Film from '../Film/Film'

class FilmeList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container mt-3">
                <div className="row">
                    {
                        this.props.films.map((films, i) => {
                            return (
                                <Film key={i} image={films.poster_path}/>
                            )
                        })
                    }
                </div>
            </div>
         );
    }
}
 
export default FilmeList;
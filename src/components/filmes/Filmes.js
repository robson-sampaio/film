import React, { Component } from 'react';

class Filmes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2 className="mt-2">Filmes</h2>
                <div className="row">
                    <div className="col">
                        <div className="card mt-2 text-center">
                            <div className="card-header">
                                Título
                                { console.log(this.state.results) }
                            </div>
                            <div className="card-body">
                                Imagem
                            </div>
                            <div className="card-footer">
                                Sinopse
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }

    
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=95e310c9cdf43a266b381436c3d83fc8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
        .then(resultado => resultado.json().then(dados => this.setState(dados)));
    }

}

export default Filmes;
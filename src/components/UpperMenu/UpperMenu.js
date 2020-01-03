import React, { Component } from 'react';

class MenuSuperior extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a href="/" className="navbar-brand">Film</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collpse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            Categoria
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2"
                           type="search" 
                           placeholder="Search" 
                           arial-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
         );
    }
}
 
export default MenuSuperior;
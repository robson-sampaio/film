import React, { Component } from 'react';

class MenuSuperior extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            </nav>
         );
    }
}
 
export default MenuSuperior;
import React, { Component } from 'react';
import SearchArea from '../SearchArea/SearchArea'

class UpperMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a href="/" className="navbar-brand">QuerubinhaFlix</a>
                <SearchArea handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}/>
            </nav>
         );
    }
}
 
export default UpperMenu;
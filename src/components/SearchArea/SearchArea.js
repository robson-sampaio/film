import React, { Component } from 'react';

class SearchArea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <form className="form-inline" onSubmit={this.props.handleSubmit}>
                    <input className="form-control mr-sm-2"
                            type="search" 
                            placeholder="Search" 
                            arial-label="Search"
                            onChange={this.props.handleChange}></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                            type="submit">Search</button>
                </form>         
         );
    }
}
 
export default SearchArea;
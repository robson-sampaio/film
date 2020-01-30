import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1 style={{color: "white"}} onClick={this.props.handleClick}> {this.props.searchTerms} </h1>
            </div>
         );
    }
}
 
export default Test;
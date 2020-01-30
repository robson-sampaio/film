import React, { Component } from 'react';
import PanelSearch from './PanelSearch';
import Panel from './Panel'

class PanelSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {this.props.isTrue ? <Panel genreList={this.props.genreList}/> : <PanelSearch films={this.props.films}/> }
            </div>
         );
    }
}
 
export default PanelSwitch;
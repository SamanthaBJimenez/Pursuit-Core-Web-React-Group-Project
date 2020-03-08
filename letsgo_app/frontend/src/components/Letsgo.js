import React, { Component } from 'react';
import Homepage from './Homepage';

export class Letsgo extends Component {
    render() {
        return (
            <div className="letsgo">
            <h1>Welcome to Lets Go</h1>
            <Homepage />
            </div>
        )
    }
}

export default Letsgo

import React, { Component } from 'react';
import './DrawButton.css';

class DrawButton extends Component {
    render() {
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={this.props.drawCard}>カードを引く</button>
            </div>
        )
    }
}

export default DrawButton
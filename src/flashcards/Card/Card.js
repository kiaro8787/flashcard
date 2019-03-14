import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return(
            <div className="card-container">
                <span>表示された国旗の国と首都は何？<br/>※カードを長押しすると答えが見れるよ。<br/>
                ヒント:{ this.props.area }
                </span>
                <div className="card">
                    <div className="front">
                        <div className="flag"><img src={ this.props.frontimage } alt={ this.props.country } /></div>
                    </div>
                    <div className="behind">
                        <div className="flag"><img src={ this.props.behindimage } alt={ this.props.capital } /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
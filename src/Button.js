import React, { Component } from 'react';
import rock from './img/rock.svg';
import paper from './img/paper.svg';
import scissors from './img/scissors.svg';

class Button extends Component {
    render() {
        let imgSrc = {
            'rock': rock,
            'paper': paper,
            'scissors': scissors,
        }[this.props.value]
        
        return <button className="choice-button" onClick={e => {this.props.onClick(this.props.value)}}>
            <img src={imgSrc} alt={this.props.value} />
        </button>
    }
}

export default Button;
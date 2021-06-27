import React, { Component } from 'react';
import rock from './img/rock.svg';
import paper from './img/paper.svg';
import scissors from './img/scissors.svg';

class Choice extends Component {
    render() {
        let imgSrc = {
            'rock': rock,
            'paper': paper,
            'scissors': scissors,
        }[this.props.value]
        
        return <button class="choice-button">
            <img src={imgSrc} alt={this.props.value} />
        </button>
    }
}

export default Choice;
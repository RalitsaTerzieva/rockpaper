import React, { Component } from 'react';
import rock from './img/rock.png';
import paper from './img/paper.png';
import scissors from './img/scissors.png';

class Choice extends Component {
    render() {
        let imgSrc = {
            'rock': rock,
            'paper': paper,
            'scissors': scissors,
        }[this.props.value]
        
        let classes = `choice ${this.props.orientation}`
        
        return <div className={classes}>
            <img src={imgSrc} alt={this.props.value} />
        </div>
    }
}

export default Choice;
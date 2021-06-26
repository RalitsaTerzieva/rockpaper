import React, { Component } from 'react';
import './game.css';
import Choice from './Choice.js';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <table className="game-table">
            <tr>
                <td><Choice value="rock" orientation="right" /></td>
                <td style={{textAlign: "center"}}>
                    <h2>Round X</h2>
                </td>
                <td><Choice value="paper" orientation="left" /></td>
            </tr>
        </table>
    }
}

export default Game;
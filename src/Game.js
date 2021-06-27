import React, { Component } from 'react';
import './game.css';
import Choice from './Choice.js';
import Button from './Button.js';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <table className="game-table">
            <tr>
                <td><Choice value="rock" orientation="right" player="Player" /></td>
                <td style={{textAlign: "center"}}>
                    <h1 class="counter">Round 6</h1>
                    <div className="buttons">
                        <Button value="rock" />
                        <Button value="paper" />
                        <Button value="scissors" />
                    </div>
                    <div>
                        <hr />
                        <strong>Wins: </strong><span className="counter" id="wins">0</span>
                        <hr />
                        <strong>Ties: </strong><span className="counter" id="ties">5</span>
                        <hr />
                        <strong>Losses: </strong><span className="counter" id="losses">10</span>
                        <hr />
                    </div>
                </td>
                <td><Choice value="paper" orientation="left" player="AI" /></td>
            </tr>
        </table>
    }
}

export default Game;
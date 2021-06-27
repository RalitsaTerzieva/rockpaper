import React, { Component } from 'react';
import './game.css';
import Choice from './Choice.js';
import Button from './Button.js';

class Game extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            round: 1,
            wins: 0,
            losses: 0,
            ties: 0,
            playerChoice: "rock",
            aiChoice: "rock",
        };
        this.state = this.initialState
    }

    buttonClicked = (playerChoice) => {
        let choices = ['rock', 'paper', 'scissors']
        let index = Math.floor(Math.random() * choices.length);
        let aiChoice = choices[index];

        let newState = {
            ...this.state,
            'playerChoice': playerChoice,
            'aiChoice': aiChoice,
            'round': this.state['round'] + 1,
        }

        if (playerChoice === aiChoice) {
            newState['ties']++
        } else if (
            (playerChoice === "rock" && aiChoice === "scissors") ||
            (playerChoice === "paper" && aiChoice === "rock") ||
            (playerChoice === "scissors" && aiChoice === "paper")
        ) {
            newState['wins']++
        } else {
            newState['losses']++
        }

        this.setState(newState)
    }
    
    reset = () => {
        this.setState(this.initialState);
    }

    render() {
        return <table className="game-table">
            <tbody>
                <tr>
                    <td><Choice value={this.state.playerChoice} orientation="right" player="Player" /></td>
                    <td style={{textAlign: "center"}}>
                        <h1 className="counter">Round {this.state.round}</h1>
                        <div className="buttons">
                            <Button value="rock" onClick={this.buttonClicked} />
                            <Button value="paper" onClick={this.buttonClicked} />
                            <Button value="scissors" onClick={this.buttonClicked} />
                        </div>
                        <div>
                            <hr />
                            <strong>Wins: </strong><span className="counter" id="wins">{this.state.wins}</span>
                            <hr />
                            <strong>Ties: </strong><span className="counter" id="ties">{this.state.ties}</span>
                            <hr />
                            <strong>Losses: </strong><span className="counter" id="losses">{this.state.losses}</span>
                            <hr />
                            <button onClick={this.reset} className="start-over">New Game</button>
                        </div>
                    </td>
                    <td><Choice value={this.state.aiChoice} orientation="left" player="AI" /></td>
                </tr>
            </tbody>
        </table>
    }
}

export default Game;
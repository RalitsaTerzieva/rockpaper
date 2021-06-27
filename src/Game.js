import React, { Component } from 'react';
import './game.css';
import Choice from './Choice.js';
import Button from './Button.js';
import Confetti from 'react-dom-confetti';

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
            won: false,
        };
        this.state = this.initialState

        this.confettiConfig = {
            angle: "90",
            spread: 360,
            startVelocity: "36",
            elementCount: "100",
            dragFriction: 0.12,
            duration: "2000",
            stagger: 3,
            width: "8px",
            height: "8px",
            perspective: "500px",
            colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
          };
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
            newState['won'] = false
        } else if (
            (playerChoice === "rock" && aiChoice === "scissors") ||
            (playerChoice === "paper" && aiChoice === "rock") ||
            (playerChoice === "scissors" && aiChoice === "paper")
        ) {
            newState['wins']++
            newState['won'] = true
        } else {
            newState['losses']++
            newState['won'] = false
        }

        this.setState(newState)
    }
    
    reset = () => {
        this.setState(this.initialState);
    }

    render() {
        return <div>
            <Confetti active={ this.state.won } config={ this.confettiConfig } className="confetti"/>
            <table className="game-table">
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
        </div>
        
    }
}

export default Game;
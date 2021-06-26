import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <table className="game-table">
            <tr>
                <td>left hand placeholder</td>
                <td style={{textAlign: "center"}}>
                    <h2>Round X</h2>
                </td>
                <td>right hand placeholder</td>
            </tr>
        </table>
    }
}

export default Game;
import React, { Component } from 'react'
import BoxClass from './component/BoxClass';
import "./App.css"

const choice = {
    rock: {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReppfhfGzAsZshIRrwIqWmyHrzLZQlErEu1Q&usqp=CAU",
    },
    scissors: {
        image:
            "data:image/png;base64,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",
    },
    paper: {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA1akbsDxleiskLI5JIICHSOnX4hCQ-lfc8A&usqp=CAU",
    },
};

export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: "",
        };
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: choice[computerChoice],
            result: this.judgement(userChoice, computerChoice)
        })
    };

    randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomNum = Math.floor(Math.random() * itemArray.length);
        return itemArray[randomNum];
    };

    judgement = (user, computer) => {
        if (user === computer) {
            return "tie";
        } else if (user === "rock") {
            return computer === "scissors" ? "win" : "lose";
        } else if (user === "scissors") {
            return computer === "paper" ? "win" : "lose";
        } else {
            return computer === "rock" ? "win" : "lose";
        }
    };

    render() {
        return (
            <div>
                <div className="main">
                    <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
                    <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
                </div>
                <div className="main">
                    <button onClick={() => this.play("rock")}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReppfhfGzAsZshIRrwIqWmyHrzLZQlErEu1Q&usqp=CAU" />
                    </button>
                    <button onClick={() => this.play("scissors")}>
                        <img src="data:image/png;base64,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" />
                    </button>
                    <button onClick={() => this.play("paper")}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA1akbsDxleiskLI5JIICHSOnX4hCQ-lfc8A&usqp=CAU" />
                    </button>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';

export default class BoxClass extends Component {
    constructor() {
        super();
        this.result = "";
        this.image = null;
    }

    getImage = () => {
        if (this.props.item) {
            this.image = this.props.item.image;
            console.log("null");
        } else {
            this.image =
                "data:image/png;base64,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";
        }
    }

    getResult = () => {
        if (
            this.props.title === "Computer" &&
            this.props.result !== "tie" &&
            this.props.result !== ""
        ) {
            this.result = this.props.result === "win" ? "lose" : "win";
        } else {
            this.result = this.props.result;
        }
    }
    render() {
        this.getImage();
        this.getResult();
        return (
            <div className={`box ${this.result}`}>
                <h1>{this.props.title}</h1>
                <img className="item-img" src={this.image} />
                <h2>{this.result}</h2>
            </div>
        )
    }
}

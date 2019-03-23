import React, { Component } from "react";

import "./card.scss";

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-title">
          <h3>{this.props.title}</h3>
        </header>
        <div className="card-content">{this.props.children}</div>
      </div>
    );
  }
}

import React, { Component } from "react";

import "./sheet.scss";

export class Sheet extends Component {
  render() {
    return (
      <div className="sheet">
        <div className="sheet-content">{this.props.children}</div>
      </div>
    );
  }
}

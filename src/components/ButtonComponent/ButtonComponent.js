import React, {Component} from "react";
import {Button} from "@material-ui/core";

import './style.css';

export class ButtonComponent extends Component {

  render() {
    return (<Button variant="contained" className={`calculator-button ${this.props.type}`}
                    onClick={() => this.buttonClicked(this.props.type, this.props.label)}>{this.props.label}</Button>);
  }

  buttonClicked(type, label) {
    const screen = document.getElementById("screenValue");
    if (type === "keypad-operation" && label === "=") {
      let result = "UNDEF";
      if (screen.innerText !== "") {
        try {
          result = eval(screen.innerText);
        } catch (e) {
          console.log("Exception", e);
        }
        screen.innerText = result;
        console.log("Result", result);
      }
    } else if (type === "keypad-operation" && label === "C") {
      screen.innerText = "";
    } else {
      screen.innerText += label;
      console.log("Evaluation Expression", screen.innerText);
    }
  }

}

import React from 'react';
import {Button} from "@material-ui/core";

import './style.css';

export const ButtonComponentTemplate = (props) => {
  return (
    <Button variant="contained" className={`calculator-button ${props.type}`} onclick="{() => buttonClicked}">{props.label}</Button>
  );
}

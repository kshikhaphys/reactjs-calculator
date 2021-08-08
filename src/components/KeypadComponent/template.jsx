import React from 'react';
import {ButtonComponent} from "../ButtonComponent";

import './style.css';

export const KeypadComponentTemplate = () => {
  return (
    <div className="keypad">
      <div className="row">
        <ButtonComponent label="1" type="number"/>
        <ButtonComponent label="2" type="number"/>
        <ButtonComponent label="3" type="number"/>
      </div>
      <div className="row">
        <ButtonComponent label="4" type="number"/>
        <ButtonComponent label="5" type="number"/>
        <ButtonComponent label="6" type="number"/>
      </div>
      <div className="row">
        <ButtonComponent label="7" type="number"/>
        <ButtonComponent label="8" type="number"/>
        <ButtonComponent label="9" type="number"/>
      </div>
      <div className="row">
        <ButtonComponent label="C" type="keypad-operation"/>
        <ButtonComponent label="0" type="number"/>
        <ButtonComponent label="=" type="keypad-operation"/>
      </div>
    </div>
  );
}

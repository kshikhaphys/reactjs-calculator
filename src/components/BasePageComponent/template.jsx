import React from 'react';
import {KeypadComponent} from "../KeypadComponent";
import {OperationsTrayComponent} from "../OperationsTrayComponent";
import {ScreenComponent} from "../ScreenComponent";

import './style.css';

export const BasePageComponentTemplate = () => {
  return (
    <div className="calculator-body">
      <ScreenComponent/>
      <OperationsTrayComponent/>
      <KeypadComponent/>
    </div>
  );
}

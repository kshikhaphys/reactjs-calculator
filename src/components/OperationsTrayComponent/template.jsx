import React from 'react';
import {ButtonComponent} from "../ButtonComponent";

import './style.css';

export const OperationsTrayComponentTemplate = () => {
  return (
    <div className="operations-tray">
      <div className="row">
        <ButtonComponent label="+" type="operation"/>
        <ButtonComponent label="-" type="operation"/>
        <ButtonComponent label="*" type="operation"/>
        <ButtonComponent label="/" type="operation"/>
      </div>
    </div>
  );
}

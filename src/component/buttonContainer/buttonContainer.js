import React from 'react';

import './buttonContainer.css';

const ButtonContainer = ({calculatorType, buttonAction}) => (
  <button
    onClick={buttonAction}
    className="Button">Click {calculatorType}</button>
);

export default ButtonContainer;
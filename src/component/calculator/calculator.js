import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  CALCULATION_ACTION,
  CLEAR_VALUE_ACTION,
  EQUAL_ACTION,
  POWER_OF_TWO_ACTION,
  SQUARE_ROOT_ACTION
} from '../../core/calculator/action';
import { powerSymbol } from '../../constant';
import './calculator.css';

class Calculator extends Component {
  render() {
    const {
      isAdvancedCalShowing,
      value,
      basicButtons,
      advancedButtons,
      addition,
      clear,
      equal,
      powerOfTwo,
      squareRoot,
    } = this.props

    const asignButtonAction = (btn, key) => {
      if (btn === 'C') {
        return (
          <button
            key={key}
            className="ButtonClass"
            onClick={clear.bind(this)}>{btn}</button>
        )
      } else if (btn === "=") {
          return (
            <button
              key={key}
              className="ButtonClass"
              onClick={equal.bind(this, value)}>{btn}</button>
          )
      } else if (btn === powerSymbol) {
        return (
          <button
            key={key}
            className="ButtonClass"
            onClick={powerOfTwo.bind(this, value)}>{btn}</button>
        )
      } else if (btn === "√") {
        return (
          <button
            key={key}
            className="ButtonClass"
            onClick={squareRoot.bind(this, value)}>{btn}</button>
        )
      } else {
        return (
          <button
            key={key}
            className="ButtonClass"
            onClick={addition.bind(this, btn)}>{btn}</button>
        )
      }
      
    }

    const basicCalc = basicButtons.map((button, key) => { return asignButtonAction(button, key) })
    const advancedCalc = advancedButtons.map((button, key) => { return asignButtonAction(button, key) })
    const buttonType = isAdvancedCalShowing ? advancedCalc : basicCalc

    return (
      <div className="CalculatorContainer">
        <div className="CalculatorName">SAMCALC</div>
        <div className="DisplayContainer">
          <input
            className="Display"
            type="text"
            value={value}></input>
        </div>
        <div className="ButtonsContainer">
          {buttonType}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.value,
    basicButtons: state.basicCalcBtns,
    advancedButtons: state.advancedCalcBtns
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addition: (input) => {
      dispatch({
        type: CALCULATION_ACTION,
        input
      })
    },
    clear: () => {
      dispatch({
        type: CLEAR_VALUE_ACTION
      })
    },
    equal: (value) => {
      dispatch({
        type: EQUAL_ACTION,
        value
      })
    },
    powerOfTwo: (input) => {
      dispatch({
        type: POWER_OF_TWO_ACTION,
        input
      })
    },
    squareRoot: (input) => {
      dispatch({
        type: SQUARE_ROOT_ACTION,
        input
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)
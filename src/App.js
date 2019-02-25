import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showAdvancedCalcAction, showBasicCalcAction } from '../src/core/calculator/action';
import { getIsAdvancedCalShowing } from '../src/core/calculator/selector';

import ButtonContainer from './component/buttonContainer/buttonContainer';
import Calculator from './component/calculator/calculator';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.showAdcancedCalc = this.showAdcancedCalc.bind(this)
    this.showBasicCalc = this.showBasicCalc.bind(this)
  }

  showAdcancedCalc() {
    this.props.showAdcancedCalc()
  }

  showBasicCalc() {
    this.props.showBasicCalc()
  }

  render() {

    const { isAdvancedCalShowing } = this.props

    return (
      <div className="App">
        <Calculator isAdvancedCalShowing={isAdvancedCalShowing}/>
        <ButtonContainer
          calculatorType={isAdvancedCalShowing === true ? "Basic" : "Advanced"}
          buttonAction={isAdvancedCalShowing === true ? this.showBasicCalc : this.showAdcancedCalc}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAdvancedCalShowing: getIsAdvancedCalShowing(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showAdcancedCalc: () => {
      dispatch(
        showAdvancedCalcAction()
      )},
    showBasicCalc: () => {
      dispatch(showBasicCalcAction()
    )}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

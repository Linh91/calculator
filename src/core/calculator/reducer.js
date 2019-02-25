import {
  SHOW_ADVANCED_CALC_ACTION,
  SHOW_BASIC_CALC_ACTION,
  CALCULATION_ACTION,
  CLEAR_VALUE_ACTION,
  EQUAL_ACTION,
  SQUARE_ROOT_ACTION,
  POWER_OF_TWO_ACTION,
} from './action'; 
import { powerSymbol } from '../../constant';

export const calculatorState = {
  value: 0,
  basicCalcBtns: [ "1", "2", "3", "C", "4", "5", "6", "=", "7", "8", "9", ".", "+", "0", "-", "*", "/" ],
  advancedCalcBtns: [ "1", "2", "3", "C", "4", "5", "6", "=", "7", "8", "9", "√", "+", "0", "-", powerSymbol, "/", ".", "*", " " ],
  showBasicCalc: true,
  showAdvancedCalc: false,
}

export function reducer(state = calculatorState, action) {
  switch(action.type) {
    case SHOW_ADVANCED_CALC_ACTION:
      return {
        ...state,
        showBasicCalc: false,
        showAdvancedCalc: true,
      }
    case SHOW_BASIC_CALC_ACTION:
      return {
        ...state,
        showBasicCalc: true,
        showAdvancedCalc: false,
      }
    case CALCULATION_ACTION:
      return {
        ...state,
        value: state.value === 0 ? action.input : state.value + action.input
      }
    case CLEAR_VALUE_ACTION:
      return {
        ...state,
        value: 0
      }
    case EQUAL_ACTION:
      return {
        ...state,
        value: eval(action.value)
      }
    case POWER_OF_TWO_ACTION:
      return {
        ...state,
        value: action.input * action.input
      }
    case SQUARE_ROOT_ACTION:
      return {
        ...state,
        value: Math.sqrt(action.input)
      }
    default:
      return state;
  }
}

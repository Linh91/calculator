export const SHOW_ADVANCED_CALC_ACTION = 'SHOW_ADVANCED_CALC_ACTION';
export const SHOW_BASIC_CALC_ACTION = 'SHOW_BASIC_CALC_ACTION';
export const CALCULATION_ACTION = 'CALCULATION_ACTION';
export const CLEAR_VALUE_ACTION = 'CLEAR_VALUE_ACTION';
export const EQUAL_ACTION = 'EQUAL_ACTION';
export const SQUARE_ROOT_ACTION = 'SQUARE_ROOT_ACTION';
export const POWER_OF_TWO_ACTION = 'POWER_OF_TWO_ACTION';

export function showAdvancedCalcAction() {
  return {
      type : 'SHOW_ADVANCED_CALC_ACTION',
  }
}

export function showBasicCalcAction() {
  return {
      type : 'SHOW_BASIC_CALC_ACTION',
  }
}

export function calculationAction(input) {
  return {
      type : 'ADDITION_ACTION',
      input
  }
}

export function clearValueAction() {
  return {
      type : 'CLEAR_VALUE_ACTION',
  }
}

export function equalAction(value) {
  return {
      type : 'EQUAL_ACTION',
      value
  }
}

export function squareRootAction(input) {
  return {
      type : 'SQUARE_ROOT_ACTION',
      input
  }
}

export function powerOfTwoAction(input) {
  return {
      type : 'POWER_OF_TWO_ACTION',
      input
  }
}
import {
	CALCULATE_EXPRESSION,
	ADD_TO_EXPRESSION,
	CLEAR_EXPRESSION,
	SPECIAL_SYMBOLS,
	NUMBER_TYPE,
	STRING_TYPE,
	OPERATORS,
} from '../actions/actionTypes';
import calculateExpression from '../utils/calculateExpression';

//const initialExpressionState = [0, "×", 4, "+", 2, 0, "+", "-", 2, 0, "+", 1, "×", "-", 1, 2, 3, "-", 1, 2, 3, 0, "×", ".", 1]
//const initialExpressionState = [0, '.', 2, '+', 2, 2, '.', 2, '+', '.', 2]
//const initialExpressionState = ["-", 2, 4, 6];
const clearExpression = [];

function isLastNumberIntiger(array) {
	let symbolList = [...array]
		.reverse()
		.filter((element) => typeof element === STRING_TYPE);
	if (symbolList[0] === OPERATORS.DOT) return false;
	return true;
}

function operatorSubReducer(stateBase, state, operator, lastElement) {
	let oldState = [...state];
	let oldStateBase = [...stateBase];
	let newLastElement = lastElement;
	if (
		(lastElement === OPERATORS.DOT || lastElement === OPERATORS.MINUS) &&
		typeof state[state.length - 2] == STRING_TYPE
	) {
		if (!(lastElement === OPERATORS.MINUS && operator === OPERATORS.DOT)) {
			oldState = oldStateBase;
			oldStateBase = oldState.slice(0, oldState.length - 1);
			lastElement = oldState[oldState.length - 1];
		}
	}
	switch (operator) {
		case OPERATORS.MINUS:
			if (newLastElement === OPERATORS.MINUS) return oldState;
			return [...oldState, operator];
		case OPERATORS.DOT:
			if (newLastElement === OPERATORS.DOT || !isLastNumberIntiger(oldState))
				return oldState;
			return [...oldState, operator];
		default:
			if (typeof newLastElement === STRING_TYPE)
				return [...oldStateBase, operator];
			return [...oldState, operator];
	}
}

function getNewState(state, key) {
	let lastIndex = state.length - 1;
	let lastElement = state[lastIndex];
	let newStateBase = [...state].slice(0, lastIndex);

	switch (typeof key) {
		case NUMBER_TYPE:
			if (typeof lastElement === NUMBER_TYPE) {
				if (lastElement === 0) {
					if (typeof state[lastIndex - 1] === NUMBER_TYPE)
						return [...state, key]; // 5 0 +key = 5 0 key  not 5 key
					if (key === 0) return state;
					return [...newStateBase, key];
				}
			}
			return [...state, key];
		case STRING_TYPE:
			return operatorSubReducer(
				[...newStateBase],
				[...state],
				key,
				lastElement
			);
		default:
			return state;
	}
}

function expressionReducer(state = clearExpression, action) {
	switch (action.type) {
		case ADD_TO_EXPRESSION:
			return getNewState(state, action.payload.key);
		case CLEAR_EXPRESSION:
			return clearExpression;
		case CALCULATE_EXPRESSION:
			return calculateExpression(action.payload.exp);
		case SPECIAL_SYMBOLS.REMOVE:
			let newStateRem = state.length
				? [...state].slice(0, state.length - 1)
				: state;
			return newStateRem;
		case SPECIAL_SYMBOLS.CE:
			let newStateCE = [...state]
				.join('')
				.replace(/([×÷+-]?|\d*\.?\d*%*)$/, '')
				.split('')
				.map((elem) => (Number(elem) ? Number(elem) : elem));
			return newStateCE;
		case SPECIAL_SYMBOLS.C:
			return [];
		default:
			return state;
	}
}

export default expressionReducer;

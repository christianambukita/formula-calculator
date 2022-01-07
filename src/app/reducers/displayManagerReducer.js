import {
	REMOVE_FROM_EXPRESSION,
	CALCULATE_EXPRESSION,
	ADD_TO_EXPRESSION,
	CLEAR_EXPRESSION,
} from '../actions/actionTypes';

let initialState = '';

export default function displayManagerReducer(state = initialState, action) {
	switch (action.type) {
		case REMOVE_FROM_EXPRESSION:
			return action.type;
		case CALCULATE_EXPRESSION:
			return action.type;
		case ADD_TO_EXPRESSION:
			return action.type;
		case CLEAR_EXPRESSION:
			return action.type;
		default:
			return state;
	}
}

import { EXPRESSION_TO_DISPLAY } from '../actions/actionTypes';
import expToDisplay from '../utils/expToDisplay';

const initialState = 'enter your expression';

function displayReducer(state = initialState, action) {
	switch (action.type) {
		case EXPRESSION_TO_DISPLAY:
			return expToDisplay(action.payload.exp);
		default:
			return state;
	}
}

export default displayReducer;

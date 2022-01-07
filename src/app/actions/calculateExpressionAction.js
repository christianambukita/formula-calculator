import { CALCULATE_EXPRESSION } from './actionTypes';

export default function calculateExpression(exp) {
	return {
		type: CALCULATE_EXPRESSION,
		payload: {
			exp,
		},
	};
}

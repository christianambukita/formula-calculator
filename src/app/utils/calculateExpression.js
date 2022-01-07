import { OPERATORS } from '../actions/actionTypes';

export default function calculateExpression(expression) {
	const singleNumber = /(-?\d+\.?\d*)/g;
	const plusMinusReduction = /\+\(?(-\d+\.?\d*)\)?/g;
	const mult = /(\(?(-?\d+\.?\d*)\)?×\(?(-?\d+\.?\d*)\)?)/;
	const div = /(\(?(-?\d+\.?\d*)\)?÷\(?(-?\d+\.?\d*)\)?)/;
	const plusMinus = /(-?\d+\.?\d*)[+-](-?\d+\.?\d*)/;
	const percent = /(\d\.?\d*)%/;

	const operations = {
		[OPERATORS.PLUS]: (a, b) => a + b,
		[OPERATORS.MINUS]: (a, b) => a - b,
		[OPERATORS.DIV]: (a, b) => a / b,
		[OPERATORS.MPLY]: (a, b) => a * b,
	};

	function reduceOp(exp, regExp, operator) {
		let newExp = exp;
		while (newExp.match(regExp)) {
			let replacement = newExp
				.match(regExp)[0]
				.match(singleNumber)
				.reduce((a, b) => operations[operator](Number(a), Number(b)));

			newExp = newExp.replace(regExp, replacement);
		}
		return newExp;
	}

	function calculatePercent(exp) {
		let newExp = exp;
		while (newExp.match(percent)) {
			let replacement = Number(newExp.match(percent)[1]) * 0.01;

			newExp = newExp.replace(percent, replacement);
		}
		return newExp;
	}

	let calcExp = expression.replace(/ /g, '');
	calcExp = calculatePercent(calcExp);
	calcExp = reduceOp(calcExp, mult, OPERATORS.MPLY);
	calcExp = reduceOp(calcExp, div, OPERATORS.DIV);
	calcExp = calcExp.replace(plusMinusReduction, '$1');
	calcExp = reduceOp(calcExp, plusMinus, OPERATORS.PLUS);
	return calcExp.split('').map((elem) => (Number(elem) ? Number(elem) : elem));
}

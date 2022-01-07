import listToButtons from '../utils/listToButtons';
import addToExpressionAction from '../actions/addToExpressionAction';
import { connect } from 'react-redux';

function Operators({ handleButtonClick }) {
	const operatorList = ['+', '-', '×', '÷'];
	return (
		<div id='operators'>
			{listToButtons(
				operatorList,
				(key) => handleButtonClick(key),
				'button',
				'op-'
			)}
		</div>
	);
}

export default connect(null, (dispatch) => ({
	handleButtonClick: (key) => dispatch(addToExpressionAction(key)),
}))(Operators);

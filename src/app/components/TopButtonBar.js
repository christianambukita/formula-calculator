import listToButtons from '../utils/listToButtons'
import addToExpressionAction from '../actions/addToExpressionAction'
import {SPECIAL_SYMBOLS} from '../actions/actionTypes'
import {connect} from 'react-redux'

function TopButtonBar({handleButtonClick, handleSpecialSymbol}){
    return(
        <div id='top-button-bar'>
            {listToButtons(['%'], (key) => handleButtonClick(key), 'button top-btn', 'tbb-')}
            {listToButtons(['CE'], () => handleSpecialSymbol(SPECIAL_SYMBOLS.CE), 'button top-btn', 'tbb-')}
            {listToButtons(['C'], () => handleSpecialSymbol(SPECIAL_SYMBOLS.C), 'button top-btn', 'tbb-')}
            {listToButtons(['<-'], () => handleSpecialSymbol(SPECIAL_SYMBOLS.REMOVE), 'button top-btn', 'tbb-')}
        </div>
    )
}

export default connect(null, dispatch=>({
    handleButtonClick: 
        (key) => dispatch(addToExpressionAction(key)),
    handleSpecialSymbol:
        (symbol) => dispatch({type: symbol})
}))(TopButtonBar)
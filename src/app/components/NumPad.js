import listToButtons from '../utils/listToButtons'
import addToExpressionAction from '../actions/addToExpressionAction'
import expToDisplayAction from '../actions/expToDisplayAction'
import calculateExpressionAction from '../actions/calculateExpressionAction'
import {CLEAR_EXPRESSION} from '../actions/actionTypes'
import {useEffect} from 'react'
import {connect} from 'react-redux'

function NumPad({
    addNumberToExpression,
    sendExpToDisplay,
    clearExpression,
    expressionState,
    displayState,
    calculate}){

    const buttonList = [7, 4, 1, '.', 8, 5, 2, 0, 9, 6, 3];

    function handleCalc(){
        calculate(displayState)
    }

    useEffect(()=>{
        sendExpToDisplay(expressionState)
    }, [expressionState, sendExpToDisplay])


    return(
        <div id='numpad'>
            {listToButtons(
                buttonList,
                (key)=>addNumberToExpression(key),
                'button',
                'num-'
            )}
            {listToButtons(
                ['='],
                ()=>handleCalc(),
                'button',
                'num-'
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    expressionState: state.expression,
    displayState: state.display
}) 

const mapDispatchToProps = dispatch => ({
    addNumberToExpression: (key) => dispatch(addToExpressionAction(key)),
    sendExpToDisplay: (exp) => dispatch(expToDisplayAction(exp)),
    calculate: (exp) =>  dispatch(calculateExpressionAction(exp)),
    clearExpression: () => dispatch({type: CLEAR_EXPRESSION})
})

export default connect(mapStateToProps, mapDispatchToProps)(NumPad)
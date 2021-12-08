import {ADD_TO_EXPRESSION} from './actionTypes'

function addToExpressionAction(key){
    return {
        type: ADD_TO_EXPRESSION,
        payload: {
            key
        }
    }
}

export default addToExpressionAction
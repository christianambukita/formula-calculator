import {EXPRESSION_TO_DISPLAY} from './actionTypes'

export default function expToDisplayAction(exp){
    return({
        type: EXPRESSION_TO_DISPLAY,
        payload: {
            exp
        }
    })
}
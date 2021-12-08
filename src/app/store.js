import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import displayManagerReducer from './reducers/displayManagerReducer'
import expressionReducer from './reducers/expressionReducer'
import displayReducer from './reducers/displayReducer'


const composeEnhancers = composeWithDevTools({trace: true});

const rootReducer = combineReducers({
  expression: expressionReducer,
  display: displayReducer,
  displayManager: displayManagerReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


export {store}
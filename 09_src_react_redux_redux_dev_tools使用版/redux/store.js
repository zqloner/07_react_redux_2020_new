
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

const allReducer = combineReducers({
  countReducer,
  personReducer
})

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

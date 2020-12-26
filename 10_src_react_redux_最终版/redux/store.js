import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
//引入汇总之后的reducers
import reducers from './reducers'


export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

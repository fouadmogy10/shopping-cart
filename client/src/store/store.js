import { createStore ,applyMiddleware,compose} from 'redux'
import reduxThunk from "redux-thunk"
import { reducer } from './reducers/reducers'
const initialState={VALUE :1} 
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE||compose
let store = createStore(reducer,initialState,enhancer(applyMiddleware(reduxThunk)))
export default store
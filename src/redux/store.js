import {legacy_createStore as createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReduser from './combineRedusers'

const store = createStore(
    rootReduser,
    applyMiddleware(thunk)
)

export default store;
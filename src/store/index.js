import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cashReducer} from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducers = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
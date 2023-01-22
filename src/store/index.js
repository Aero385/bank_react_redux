import { legacy_createStore as createStore, combineReducers} from 'redux';
import { cashReducer} from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducers = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducers)
import { combineReducers } from 'redux';
import { TOGGLE } from './actions';

function value(state = false, action) {
    switch (action.type) {
        case TOGGLE:
            return !state;
        default:
            return state;
    }
}

const toggleApp = combineReducers({
    value
});

export default toggleApp;

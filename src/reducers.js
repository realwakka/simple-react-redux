import { combineReducers } from 'redux';
import { TOGGLE, INCREMENT } from './actions';

function value(state = false, action) {
    console.log('toggle in reducer')
    console.log(state)
    switch (action.type) {
        case TOGGLE:
            return !state;
        default:
            return state;
    }
}

function count(state = 0, action) {
    console.log('count')
    console.log(action)
    switch (action.type) {
        case INCREMENT:
            return (state + 1)
        default:
            return state

    }
}

const toggleApp = combineReducers({
    value,
    count
});

export default toggleApp;

import { combineReducers } from 'redux';
import { TOGGLE } from './actions'

const initialState = {
    val: true
};

function toggle(state = initialState, action) {
    switch (action.type) {
        case TOGGLE:
            return { ...state, val: !state.val };
        default:
            return state;
    }
}

const toggleApp = combineReducers({
    toggle
});

export default toggleApp;

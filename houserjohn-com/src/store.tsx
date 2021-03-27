import { createStore } from 'redux';

const reducer = (state: {txt: string}, action: {type: string, payload: string}) => {
// The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case 'txt/set_txt': {
            // We need to return a new state object
            return {
                // that has all the existing state data
                ...state,
                txt: action.payload,
            }
        }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}

const store = createStore(reducer as any, {txt: '???'});

export default store;
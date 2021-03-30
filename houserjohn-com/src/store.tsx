import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state: {txt: string, grid: string}, action: {type: string, payload: string}) => {
// The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case 'path/set_grid': {
            return {
                ...state,
                grid: action.payload
            }
        }

        case 'path/set_alg': {
            return {
                ...state,
                alg: action.payload
            }
        }

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

const store = createStore(reducer as any, {txt: '???', grid: "5x5", alg: "DFS"},  composeWithDevTools());

export default store;
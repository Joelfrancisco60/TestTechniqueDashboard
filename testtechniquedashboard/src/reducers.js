import { combineReducers } from 'redux';

const initialState = {
    month: 'all',
    year: 'all',
};

const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MONTH':
            return {
                ...state,
                month: action.payload,
            };
        case 'SET_YEAR':
            return {
                ...state,
                year: action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    date: dateReducer,
});

export default rootReducer;

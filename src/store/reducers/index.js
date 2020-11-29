const initialState = { foodItem: {}, results: [], counter: 0, resultPrice: 0 }

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CARD':
            return {
                foodItem: action.payload,
                results: [...state.results, action.payload],
                counter: state.counter + 1,
                resultPrice: state.resultPrice + action.payload.price,
            }
        case 'REM_FROM_CARD':
            let newarr = [...state.results];
            newarr.splice(action.payload.index, 1);
            return {
                ...state,
                results: newarr,
                counter: state.counter - 1,
                resultPrice: state.resultPrice - action.payload.price,
            }
        default:
            return state
    }
}
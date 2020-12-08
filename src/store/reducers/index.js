const initialState = { foodItem: {}, results: [], counter: 0, resultPrice: 0, curentUserId: "", }

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CARD':
            console.log(action.payload.number);
            if (action.payload.number === undefined) {
                action.payload.number = 1;
            }
            state.results.map((elem) => {
                if (elem.name === action.payload.name) {
                    action.payload.number = action.payload.number + 1;
                }
            })
            return {
                foodItem: action.payload,
                results: [...new Set([...state.results, action.payload])],
                counter: state.counter + 1,
                resultPrice: state.resultPrice + action.payload.price,
            }
        case 'REM_FROM_CARD':
            let newarr = [...state.results];
            newarr.splice(action.payload.index, 1);
            return {
                ...state,
                results: newarr,
                counter: state.counter - action.payload.number,
                resultPrice: state.resultPrice - (action.payload.price * action.payload.number),
            }
        case 'CUR_USER':
            return {
                ...state,
                curentUserId: action.payload,
            }
        case 'POST_ORDER':
            return {
                ...state,
                results: action.payload,
                counter: 0,
                resultPrice: 0,
            }
        default:
            return state
    }
}
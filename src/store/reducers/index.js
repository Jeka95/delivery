const initialState = { foodItem: {}, results: [], counter: 0, resultPrice: 0, curentUserId: "", }

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CARD':
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
        case "ADD_ITEM":
            state.results.map((e) => {
                if (e.name === action.payload.name) {
                    action.payload.number = action.payload.number + 1;
                }
            })
            return {
                ...state,
                counter: state.counter + 1,
                resultPrice: state.resultPrice + action.payload.price,
            }
        case "REM_ITEM":
            let newarr = [...state.results];
            state.results.map((e) => {
                if (e.name === action.payload.elem.name) {
                    action.payload.elem.number = action.payload.elem.number - 1;
                }
                if (action.payload.elem.number === 0) {
                    newarr.splice(action.payload.index, 1);
                }
            })
            return {
                ...state,
                counter: state.counter - 1,
                resultPrice: state.resultPrice - action.payload.elem.price,
                results: newarr,

            }

        case 'REM_FROM_CARD':
            let newarrr = [...state.results];
            newarr.splice(action.payload.index, 1);
            return {
                ...state,
                results: newarrr,
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
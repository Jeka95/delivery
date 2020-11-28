const initialState = { foodItem: {}, results: [] }

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CARD':
            return {
                foodItem: action.payload,
                results: [...state.results, action.payload]
            }
        case 'REM_FROM_CARD':
            console.log("працює");
            console.log("state.result-->", state.results);
            let newarr = [...state.results];
            console.log("id-->", action.payload);
            newarr.splice(action.payload, 1);
            return {
                ...state,
                results: newarr
            }
        default:
            return state
    }
}
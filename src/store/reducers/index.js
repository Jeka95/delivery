const initialState = { counter: 0, results: [] }

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_MOUNT':
            console.log('I am tiggered inside reducer');
            return state;

        default:
            return state
    }
}
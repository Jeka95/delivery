import axiosFavorite from "../../instance";

const initialState = { itemsServer: [], foodItem: {}, results: [], counter: 0, resultPrice: 0, curentUserId: "", favorite: [] }


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'RENDER_ITEM':
            return {
                ...state,
                foodItem: action.payload,
            }

        case 'GET_ITEMS':
            return {
                ...state,
                itemsServer: [...action.payload]
            }
        case 'ADD_TO_CARD':
            let addcard = state.results;
            if (addcard.length === 0) {
                addcard.push(action.payload);
            } else {
                let find = addcard.find((el) => el.name === action.payload.name)
                if (find === undefined) {
                    addcard.push(action.payload);
                } else {
                    state.results.map((elem) => {
                        if (elem.name === action.payload.name) {
                            elem.number = elem.number + 1;
                        }
                    })
                }
            }
            return {
                ...state,
                results: [...addcard],
                counter: state.counter + 1,
                resultPrice: state.resultPrice + action.payload.price,
            }
        case "ADD_ITEM":
            let addItem = [...state.results];
            addItem.map((e) => {
                if (e.name === action.payload.name) {
                    return e.number = e.number + 1;
                }
                return e.number
            })
            return {
                ...state,
                results: addItem,
                counter: state.counter + 1,
                resultPrice: state.resultPrice + action.payload.price,
            }
        case "REM_ITEM":
            let newarr = [...state.results];
            state.results.map((e) => {
                if (e.name === action.payload.elem.name) {
                    e.number = e.number - 1;
                }
                if (e.number === 0) {
                    newarr.splice(action.payload.index, 1);
                }
            })
            return {
                ...state,
                results: [...newarr],
                counter: state.counter - 1,
                resultPrice: state.resultPrice - action.payload.elem.price,
            }
        case 'REM_FROM_CARD':
            let newarrr = [...state.results];
            newarrr.splice(action.payload.index, 1);
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
        case 'CUR_USER_FAVORITE':
            return {
                ...state,
                favorite: action.payload,
            }
        case 'POST_ORDER':
            return {
                ...state,
                results: action.payload,
                counter: 0,
                resultPrice: 0,
            }
        case 'ADD_TO_FAVORITE':
            let chekedItem = [...state.favorite];
            let check = state.favorite.some((elem) => elem.name === action.payload.name);
            if (!check) {
                action.payload.bool = true;
                chekedItem = [...state.favorite, action.payload]
            } else {
                action.payload.bool = false;
                const isSame = (element) => element.name === action.payload.name;
                let indexsamename = state.favorite.findIndex(isSame)
                chekedItem.splice(indexsamename, 1);
            }
            var items = chekedItem
            axiosFavorite
                .patch(`/users/${state.curentUserId}/favorite.json`, { items })
            return {
                ...state,
                favorite: [...chekedItem],
            }
        case 'REMOVE_FROM_FAVORITE':
            action.payload.bool = false;
            const isSameName = (element) => element.name === action.payload.name;
            let indexfav = state.favorite.findIndex(isSameName)
            let arrfav = [...state.favorite];
            arrfav.splice(indexfav, 1);
            items = arrfav;
            axiosFavorite
                .patch(`/users/${state.curentUserId}/favorite.json`, { items })
            return {
                ...state,
                favorite: [...arrfav],
            }
        default:
            return state
    }
}
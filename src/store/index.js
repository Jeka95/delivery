import { createStore } from 'redux';
import { rootReducer } from './reducers/index.js'

export const store = createStore(rootReducer);
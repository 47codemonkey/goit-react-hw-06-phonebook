import { createStore } from 'redux';
import { phoneBookReducer } from './phoneBookReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import initialStore from './initialStore';

const store = createStore(phoneBookReducer, initialStore, devToolsEnhancer());

export default store;

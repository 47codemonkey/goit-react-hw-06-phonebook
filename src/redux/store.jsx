import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phoneBookReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = configureStore(
  {
    reducer: phoneBookReducer,
  },
  devToolsEnhancer(),
);

export default store;

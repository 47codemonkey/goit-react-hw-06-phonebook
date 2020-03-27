import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phoneBookReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore(
  {
    reducer: phoneBookReducer,
  },
  composeWithDevTools(),
);

export default store;

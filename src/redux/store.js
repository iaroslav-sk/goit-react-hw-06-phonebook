import { configureStore } from '@reduxjs/toolkit';
import combineReducers from './contacts-reducer';

const store = configureStore({
  reducer: combineReducers,
  devTools: true,
});

export default store;

// ========redux store withuout redux-toolkit=========//

// import { createStore } from 'redux';

// const store = createStore(
//   contactReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

//======================================================//

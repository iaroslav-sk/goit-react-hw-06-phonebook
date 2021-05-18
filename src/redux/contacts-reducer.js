import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { AddContact, deleteContact, filteredContact } from './contact-action';

const items = createReducer([], {
  [AddContact]: (state, { payload }) => {
    console.log(payload);
    const { name } = payload;
    const isFinded = state.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (isFinded) {
      alert('Контакт уже есть в списке !');
    }
    return [payload, ...state];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filteredContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// ========redux redusers withuout redux-toolkit=========//

// import types from './types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       const { name } = payload;
//       const isFinded = state.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase(),
//       );
//       if (isFinded) {
//         alert('Контакт уже есть в списке !');
//         return state;
//       }
//       return [payload, ...state];
//     case types.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CONTACT:
//       return payload;

//     default:
//       return state;
//   }
// };

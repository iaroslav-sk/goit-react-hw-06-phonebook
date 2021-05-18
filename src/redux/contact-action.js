// import types from './types';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const AddContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('contact/delete');

const filteredContact = createAction('contact/filter');

export { AddContact, deleteContact, filteredContact };

// ========redux action withuout redux-toolkit=========//

// const AddContact = ({ name, number }) => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE_CONTACT,
//   payload: contactId,
// });

// const filteredContact = value => ({
//   type: types.FILTER_CONTACT,
//   payload: value,
// });

//===================================================//

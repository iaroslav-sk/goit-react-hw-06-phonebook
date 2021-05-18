import types from './types';
import { v4 as uuidv4 } from 'uuid';

const AddContact = ({ name, number }) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE_CONTACT,
  payload: contactId,
});

const filteredContact = value => ({
  type: types.FILTER_CONTACT,
  payload: value,
});

export { AddContact, deleteContact, filteredContact };

import { combineReducers } from 'redux';
import types from './types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      const { name } = payload;
      const isFinded = state.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );
      if (isFinded) {
        alert('Контакт уже есть в списке !');
        return state;
      }
      return [payload, ...state];
    case types.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CONTACT:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});

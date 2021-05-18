import React from 'react';
import { connect } from 'react-redux';
import style from './Style.module.css';
import { deleteContact } from '../redux/contact-action';

const ContactList = ({ contacts, onDeteleContact }) => (
  <ul className={style.list}>
    {contacts !== undefined &&
      contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          {name}: {number};
          <button onClick={() => onDeteleContact(id)}>Delete contact</button>
        </li>
      ))}
  </ul>
);

const mapStateToProps = state => {
  const { filter, items } = state;
  const normaliseNameContact = filter.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normaliseNameContact),
  );
  return { contacts: filteredContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeteleContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

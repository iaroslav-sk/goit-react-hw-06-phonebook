import React, { Component } from 'react';
import Form from './components/Form.jsx';
import ContactList from './components/ContactList.jsx';
import Filter from './components/Filter.jsx';
import style from './components/Style.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  render() {
    return (
      <div className={style.wrapper}>
        <h1>Phonebook</h1>
        <Form onSubmitData={this.formSubmitData} />
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    );
  }
}

export default App;

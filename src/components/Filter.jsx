import React from 'react';
import { connect } from 'react-redux';
import style from './Style.module.css';
import { filteredContact } from '../redux/contact-action';

const Filter = ({ value, onChange }) => (
  <label className={style.filter}>
    Filter by name:
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filteredContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

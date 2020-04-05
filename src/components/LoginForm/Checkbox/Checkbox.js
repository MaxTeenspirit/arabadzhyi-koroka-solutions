import React from 'react';
import './Checkbox.scss';

const Checkbox = props => {
  const { input, type, id } = props;
  return (
    <div className="Checkbox">
      <input {...input}
        type={type}
        id={id}
      />
      <span className="custom-check"></span>
      <label htmlFor={id}>I accept the terms of the offer of <a href="/login">the privacy policy</a></label>
    </div>
  )
}

export default Checkbox;
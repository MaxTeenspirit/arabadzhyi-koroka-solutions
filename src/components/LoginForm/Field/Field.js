import React from 'react';
import './Field.scss'

export const Field = props => {
  const { input, placeholder, novalidate, type, className, meta: {touched, error, active, dirty, autofilled}} = props;
  return (
    <div className="input-wrapper">
      <input {...input} 
        className={(error !== undefined && error !== 'Required') ? className + ' error' : !error && !autofilled ? className + ' success' : className + ''} 
        placeholder={dirty ? null : placeholder} 
        type={type} 
        title={placeholder} 
      />
      {(touched || active) && dirty ? <label>{placeholder}</label> : null}
      {touched && error && !novalidate && <p><span className="errorMsg">{error}</span></p>}
      {!error && autofilled ? null : !error && !autofilled ? <div className="success-icon"></div> : null}
    </div>
  );
}
export default Field;
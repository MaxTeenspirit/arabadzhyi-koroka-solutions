import React from 'react';
import './RegistrationForm.scss';
import { Field as RenderField } from '../Field/Field';
import Checkbox from '../Checkbox/Checkbox';
import { Field, reduxForm } from 'redux-form';
import { username, email, phone, required } from '../validation/validation';
import { makeRegistration } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

let RegistrationForm = props => {
  
  const dispatch = useDispatch();
  
  const submitRegistration = form => {
    dispatch(makeRegistration(form.username, form.email, form.phone));
  }
  
  return (
    <form className="RegistrationForm" onSubmit={submitRegistration}>
      <div className="form-group">
        <Field
          name="username"
          component={RenderField}
          type="text"
          placeholder="Your name"
          className="field"
          validate={[required, username]}
        />
      </div>
      <div className="form-group">
        <Field
          name="email"
          component={RenderField}
          type="email"
          placeholder="E-mail"
          className="field"
          validate={[required, email]}
        />
      </div>
      <div className="form-group">
        <Field
          name="phone"
          component={RenderField}
          type="phone"
          placeholder="Phone"
          className="field"
          validate={[required, phone]}
        />
      </div>
      <div className="form-group">
        <Field 
          name="policy" 
          component={Checkbox} 
          type="checkbox"
          id="policy-check"
        />
      </div>
      <button type="submit" className="button registration">Registration</button>
      <button onClick={props.onSigninClick}>Sign in</button>
    </form>
  )
}

RegistrationForm = reduxForm ({
  form: 'registration',
  enableReinitialize: true
}) (RegistrationForm);

export default RegistrationForm;
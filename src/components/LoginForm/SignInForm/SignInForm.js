import React from 'react';
import './SignInForm.scss';
import { Field as RenderField } from '../Field/Field';
import { Field, reduxForm } from 'redux-form';
import { username, password, required } from '../validation/validation';
import { useDispatch } from 'react-redux';
import { makeSignIn } from '../../../redux/actions';

let SignInForm = props => {

  const dispatch = useDispatch();
  
  const submitSignIn = form => {
    dispatch(makeSignIn(form.username, form.password));
  }

  return (
    <form className="SignInForm" onSubmit={submitSignIn}>
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
          name="password"
          component={RenderField}
          type="password"
          placeholder="Password"
          className="field"
          validate={[required, password]}
        />
      </div>
      <button type="submit" className="button signin">Sign in</button>
      <button onClick={props.onRegistrationClick}>Registration</button>
    </form>
  )
}

SignInForm = reduxForm ({
  form: 'signin',
  enableReinitialize: true
}) (SignInForm);

export default SignInForm;
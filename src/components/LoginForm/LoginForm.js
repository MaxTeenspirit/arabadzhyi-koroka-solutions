import React, { useState } from 'react';
import './LoginForm.scss';
import RegistrationFrom from './RegistrationForm/RegistrationForm';
import SignInForm from './SignInForm/SignInForm';


const LoginForm = () => {
  const [isRegist, setRegist] = useState(true);
  
  const onRegistClick = () => {
    setRegist(true);
  }

  const onSigninClick = () => {
    setRegist(false);
  }

  return (
    <div className="LoginForm">
      <div className="LoginForm-container">
        <div className="LoginForm-title">
          <h2>Profile</h2>
          <div className="LoginForm-switches">
            <button onClick={onRegistClick} className={isRegist ? "form-switch active" : "form-switch"}>Registration</button>
            <button onClick={onSigninClick} className={isRegist ? "form-switch" : "form-switch active"}>Sign in</button>
          </div>
        </div>
        <div className="LoginForm-socials">
          <p>You can sign in with social</p>
          <div className="social-buttons">
            <button className="vk"></button>
            <button className="fb"></button>
            <button className="google"></button>
          </div>
        </div>
        <div className="LoginForm-forms">
          {
            isRegist
            ? <RegistrationFrom onSigninClick={onSigninClick} />
            : <SignInForm onRegistrationClick={onRegistClick} />
          }
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
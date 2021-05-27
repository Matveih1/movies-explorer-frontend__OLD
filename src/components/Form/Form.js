import React from 'react';

import './Form.css';
import logo from '../../images/logo.svg';
import Button from '../Button/Button';

function Form(props) {

  return (
    <div className="form">
      <header className="form-header">
        <img className="form-header__logo" src={logo} alt="Лого" />
        <h2 className="form__title">{ props.title }</h2> 
      </header>
      <form
        className = "form"
        name      = { props.name }
        onSubmit  = { props.onSubmit }
      >
        { props.children }
        
        <span className="form__message">{props.errorMessage}</span>
        <Button
          text={props.textSubmitBtn}
        />
      </form>
    </div>
  );
}

export default Form;

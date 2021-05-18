import React from 'react';
import Button from '../Button/Button';

import './Form.css';

function Form(props) {

  return (
    <form
      className = "form"
      name      = { props.name }
      onSubmit  = { props.onSubmit }
    >
      <h2 className="form__title">{ props.title }</h2> 

      { props.children }
      
      <span className="form__message">{props.errorMessage}</span>
      <Button
        text={props.textSubmitBtn}
      />
    </form>
  );
}

export default Form;

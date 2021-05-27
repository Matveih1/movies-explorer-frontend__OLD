import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Form from '../Form/Form';

import './Login.css';

function Login(props) {

  const initialData = {
    email: '',
    password: '',
  }

  const [data, setData] = React.useState(initialData);
  
  function handleChange(e) {
    const { name, value } = e.target;
    setData(data => ({
      ...data,
      [name]: value,
    }));
  }

  function resetForm() {
    setData(initialData);
  }

  function handleSubmit(e){
    e.preventDefault();
    
    if (!data.email || !data.password){
      //можем сообщить, что поля пустые
      return;
    }

    props.onLogin(data)
      // .then(resetForm)
      // .catch(err => console.log(err));

    resetForm();
  } 

  return (
    <div className="login">
      <Form 
        name = "login"
        onSubmit = {handleSubmit}
        title = "Рады видеть!"
        textSubmitBtn = "Войти"
        textLink = "Ещё не зарегистрированы?"

      >   
        <Input 
          title       = "E-mail"
          name        = "email" 
          type        = "email" 
          value       = {data.email}
          required    = {true} 
          onChange    = {handleChange} 
        />

        <Input 
          title       = "Пароль"
          name        = "password" 
          type        = "password" 
          value       = {data.password}
          required    = {true}
          minLength   = "2" 
          maxLength   = "40"
          onChange    = {handleChange} 
        />
      </Form>
      
    </div>
  )
}

export default Login;

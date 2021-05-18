import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
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
  } 

  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src={logo} alt="Лого" />
      </header>

      <Form 
        name = "login"
        onSubmit = {handleSubmit}
        title = "Рады видеть!"
        textSubmitBtn = "Войти"
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
      <p className="popup__link">еще не зарегистрированы? 
      <Link to={'/sing-up'} className="header__link">Регистрация</Link>
      </p>
    </div>
  )
}

export default Login;

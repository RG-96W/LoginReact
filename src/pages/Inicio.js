import React from 'react';
import Button from '../components/Buttons'
import Input from '../components/Input'
import Label from '../components/Labels'
import { Link } from 'react-router-dom';



import '../styles/LoginForm.css'



const LoginForm = () => {
  return (
    <section className="login">
      <form className="cont__form__login" >
        <Label text="@Login" id="login__label__password" tipo="titulo" />
        <div className="cont__column">
          <Input type="text" id="login__name" />
          <Label text="Nome" id="login__label__password" tipo="padrao" />
        </div>
        {/* <Label text="Cadastre-se!" id="login__label__password" tipo="detalhes" /> */}
        <Link to="/cadastro" className='link'>Cadastre-se!</Link>
        <div className="cont__column">
          <Input type="text" id="login__password" />
          <Label text="Senha" id="login__label__password" tipo="padrao" />
        </div>

        <Link to="/recsenha" className='link'>Esqueci minha senha!</Link>

        <Button text="ENTRAR" type="button" />
        {/* //onClick={handleButtonClick1}///> */}
      </form>
    </section>
  );
};

export default LoginForm;

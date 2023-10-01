import React from 'react';
import Button from '../components/Buttons'
import Input from '../components/Input'
import Label from '../components/Labels'
import { Link } from 'react-router-dom';



import '../styles/LoginForm.css'



const LoginForm = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const login = document.getElementById('login__name').value;
    const password = document.getElementById('login__password').value;

    const formData = {
      login,
      password,
    };

    console.log(formData)

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Autenticação bem-sucedida, faça algo aqui
        console.log('Autenticação bem-sucedida.');
      } else {
        // Autenticação falhou, exiba uma mensagem de erro
        console.error('Falha na autenticação.');
      }
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }
  };

  
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

        <Button text="ENTRAR" type="submit" onClick={handleSubmit}/>
        {/* //onClick={handleButtonClick1}///> */}
      </form>
    </section>
  );
};
export default LoginForm;

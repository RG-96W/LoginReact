import React from 'react';
import Button from '../components/Buttons'
import Input from '../components/Input'
import Label from '../components/Labels'
import ReturnBar from '../components/PrevBar'
import '../styles/RecSenhaForm.css'
// import Link from 'react-router-dom';


const RecSenhaForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById('login__name').value;


    const formData = {
      email,

    };

    console.log(formData)
  };

  return (
    <section className="RecSenha">
      <form className="cont__form__RecSenha">
        <ReturnBar className="PrevBar"/>
        <Label text="@Recuperar" id="login__label__RecSenha" tipo="titulo" />
        <div className="cont__column">
          <Input type="text" id="login__name" />
          <Label text="E-Mail" id="login__label__RecSenhaEmail" tipo="padrao" />
        </div>
        <Label text="Informe o email de cadastro." id="login__label__RecSenha" tipo="detalhes" />
        <div className="cont__column">
          <Input type="text" id="login__RecSenha" readOnly={true}/>
          <Label text="Senha" id="login__label__RecSenhaSenha" tipo="padrao" />
        </div>

        <Label text="Tome sua senha, Não é o foco." id="login__label__RecSenha" tipo="detalhes" />



        <Button text="RECUPERAR" type="button" onClick={handleSubmit}/>
        {/* onClick={handleButtonClick} */}
      </form>
    </section>
  );
};

export default RecSenhaForm;
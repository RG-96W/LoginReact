import './App.css';
import Header from './components/HeaderTop';
import LoginForm from './pages/LoginForm.js';
import CadastroForm from './pages/CadastroForm.js';
import RecSenhaForm from './pages/RecSenhaForm.js';
import Login from './pages/login.js';
import RealizeLogin from './pages/RealizeLogin.js';

import './styles/HeaderStyle.css';
import './styles/ResetPage.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie'; // Importe a biblioteca js-cookie




const Private = ({ Item }) => {

  const token = Cookies.get('token'); // Obtém o token do cookie

  return token ? <Item /> : <RealizeLogin />;
}

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/RealizeLogin" element={<RealizeLogin />} />
          <Route path="/cadastro" element={<CadastroForm />} />
          <Route path="/recsenha" element={<RecSenhaForm />} />
          <Route path="/login" element ={<Private Item ={Login} />}/>
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

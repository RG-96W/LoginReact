import './App.css';
import Header from './components/HeaderTop';
import LoginForm from './pages/LoginForm.js';
import CadastroForm from './pages/CadastroForm.js';
import RecSenhaForm from './pages/RecSenhaForm.js'

import './styles/HeaderStyle.css';
import './styles/ResetPage.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
<>
    <Header />
    <BrowserRouter>
<Routes>
  <Route path='/' element={<LoginForm/>} />
  <Route path='/cadastro' element={<CadastroForm/>} />
  <Route path='/recsenha' element={<RecSenhaForm/>} />
</Routes>
</BrowserRouter>

</>
  );
}

export default App;

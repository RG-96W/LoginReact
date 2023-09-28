// validacoes/cadastro.js

const validarCadastro = async (formData) => {
    const { nome, senha, email } = formData;
    const erros = {};
  
    // Validação do nome
    if (!nome || nome.trim() === '') {
      erros.nome = 'Nome é obrigatório.';
    } else if (nome.length < 4) {
      erros.nome = 'Nome deve ter pelo menos 4 caracteres.';
    } else {
      // Verifique se o nome é único no db.json (substitua pelo seu código real)
      const nomeJaExiste = await verificarNomeUnico(nome);
      if (nomeJaExiste) {
        erros.nome = 'Nome já existe, escolha outro.';
      }
    }
  
    // Validação da senha
    if (!senha || senha.trim() === '') {
      erros.senha = 'Senha é obrigatória.';
    } else if (senha.length < 4) {
      erros.senha = 'Senha deve ter pelo menos 4 caracteres.';
    } else if (!contemLetraESenha(senha)) {
      erros.senha = 'Senha deve conter pelo menos uma letra e um número.';
    }
  
    // Validação do email
    if (!email || email.trim() === '') {
      erros.email = 'E-mail é obrigatório.';
    } else if (!validarEmail(email)) {
      erros.email = 'E-mail inválido.';
    } else {
      // Verifique se o email é único no db.json (substitua pelo seu código real)
      const emailJaExiste = await verificarEmailUnico(email);
      if (emailJaExiste) {
        erros.email = 'E-mail já existe, escolha outro.';
      }
    }
  
    if (Object.keys(erros).length === 0) {
      return { sucesso: true };
    } else {
      return { sucesso: false, erros };
    }
  };
  
  // Função auxiliar para verificar se a senha contém pelo menos uma letra e um número
  const contemLetraESenha = (senha) => {
    const regexLetra = /[a-zA-Z]/;
    const regexNumero = /[0-9]/;
    return regexLetra.test(senha) && regexNumero.test(senha);
  };
  
  // Função auxiliar para validar e-mail (pode personalizar a validação real aqui)
  const validarEmail = (email) => {
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regexEmail.test(email);
  };
  
  // Funções auxiliares para verificar se nome e email são únicos (substitua pelo seu código real)
  const verificarNomeUnico = async (nome) => {
    // Implemente a verificação real no seu db.json ou banco de dados
    return false; // Suponha que o nome seja único
  };
  
  const verificarEmailUnico = async (email) => {
    // Implemente a verificação real no seu db.json ou banco de dados
    return false; // Suponha que o email seja único
  };
  
  export default validarCadastro;
  











// try {
//         const response = await fetch('http://localhost:5000/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });
    
//         if (response.ok) {
//           console.log('Dados enviados com sucesso para a API fake.');
//         } else {
//           console.error('Erro ao enviar os dados para a API fake.');
//         }
//       } catch (error) {
//         console.error('Erro ao enviar a solicitação:', error);
//       }
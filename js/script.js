// Função para exibir mensagens de erro
function exibirMensagemErro(mensagem) {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "block";
}

// Função para ocultar mensagens de erro
function ocultarMensagemErro() {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.style.display = "none";
}

// Função para validar o formulário de login
function validarFormulario(event) {
    event.preventDefault(); // Evita o envio do formulário para validação

    // Obtendo os valores dos campos
    const usuario = document.querySelector('input[name="usuario"]').value;
    const senha = document.querySelector('input[name="senha"]').value;

    // Validando os campos
    if (!usuario || !senha) {
        exibirMensagemErro("Por favor, preencha todos os campos.");
    } else {
        // Aqui você pode adicionar outras validações, como verificar se o usuário existe, etc.
        ocultarMensagemErro();
        alert("Login bem-sucedido!"); // Aqui você pode substituir por uma ação real, como redirecionar para outra página.
    }
}

// Atribuindo a função de validação ao evento de clique do botão de login
const botaoLogin = document.querySelector('.btn-login');
botaoLogin.addEventListener('click', validarFormulario);

// Função para exibir mensagens de erro
function exibirMensagemErro(mensagem) {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "block";
}

// Função para ocultar mensagens de erro
function ocultarMensagemErro() {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.style.display = "none";
}

// Função para validar o formulário de cadastro
function validarFormularioCadastro(event) {
    event.preventDefault(); // Evita o envio do formulário para validação

    // Obtendo os valores dos campos
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
    const cpf = document.querySelector('input[name="cpf"]').value;
    const nascimento = document.querySelector('input[name="nascimento"]').value;

    // Validando os campos
    if (!nome || !email || !senha || !cpf || !nascimento) {
        exibirMensagemErro("Por favor, preencha todos os campos.");
    } else {
        // Aqui você pode adicionar outras validações, como verificar se o CPF é válido, etc.
        ocultarMensagemErro();
        alert("Cadastro bem-sucedido!"); // Aqui você pode substituir por uma ação real, como redirecionar para outra página ou enviar os dados.
    }
}

// Atribuindo a função de validação ao evento de clique do botão de cadastro
const botaoCadastro = document.querySelector('.btn-cadastrar');
botaoCadastro.addEventListener('click', validarFormularioCadastro);






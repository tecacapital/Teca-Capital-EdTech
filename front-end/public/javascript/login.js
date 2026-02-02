// Aguardar o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Selecionar elementos
    const form = document.getElementById('loginForm');
    const mensagemDiv = document.getElementById('mensagem');

    // Evento de envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impedir envio padrão
        
        // Pegar valores dos campos
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Validação básica
        if (!email || !senha) {
            mostrarMensagem('Por favor, preencha todos os campos', 'erro');
            return;
        }

        // Validar formato de email
        if (!validarEmail(email)) {
            mostrarMensagem('Por favor, insira um email válido', 'erro');
            return;
        }

        // Simular login (por enquanto)
        // Mais tarde vamos conectar com o backend
        fazerLogin(email, senha);
    });

    // Função para fazer login (temporária)
    function fazerLogin(email, senha) {
        
        // Login de teste (TEMPORÁRIO - só para testar)
        if (email === 'admin@tecacapital.ao' && senha === 'admin123') {
            mostrarMensagem('Login bem-sucedido! Redirecionando...', 'sucesso');
            
            // Salvar no localStorage
            localStorage.setItem('usuarioLogado', JSON.stringify({
                nome: 'Alberto Teca Tomás',
                email: email,
                role: 'admin'
            }));

            // Redirecionar após 1 segundo
            setTimeout(() => {
                window.location.href = 'pages/dashboard.html';
            }, 1000);
            
        } else if (email === 'user@tecacapital.ao' && senha === 'user123') {
            mostrarMensagem('Login bem-sucedido! Redirecionando...', 'sucesso');
            
            localStorage.setItem('usuarioLogado', JSON.stringify({
                nome: 'Usuário Teste',
                email: email,
                role: 'user'
            }));

            setTimeout(() => {
                window.location.href = 'pages/dashboard.html';
            }, 1000);
            
        } else {
            mostrarMensagem('Email ou senha incorretos', 'erro');
        }
    }

    // Função para mostrar mensagens
    function mostrarMensagem(texto, tipo) {
        mensagemDiv.textContent = texto;
        mensagemDiv.className = tipo;
        mensagemDiv.style.display = 'block';

        // Esconder após 5 segundos
        setTimeout(() => {
            mensagemDiv.style.display = 'none';
        }, 5000);
    }

    // Função para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
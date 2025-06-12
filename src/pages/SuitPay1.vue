<template>
  <div class="thank-you-page">
      <div class="container">
          <h1>Obrigado por comprar nosso produto!</h1>
          <p>
              777 Agradecemos imensamente por confiar na SuitPay. Seu apoio é fundamental para continuarmos oferecendo soluções inovadoras e de qualidade. Caso precise de ajuda, nossa equipe está à disposição!
           <div style="display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;"><a href="" target="_blank" style="background-color:#000000;color:#FFF;height:48px;display:flex;align-items:center;justify-content:center;width:fit-content;padding:0 24px;border-radius:48px;">Sim eu aceito.</a><a href="" target="_blank" style="background-color:transparent;color:#404040;height:48px;width:fit-content;display:flex;align-items:center;justify-content:center;padding:0 24px;border-radius:48px;">Não, obrigado.</a></div>
            </p>
          <button class="btn" @click="handleButtonClick">Voltar à Página Inicial</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Suitpay',
  methods: {
      handleButtonClick() {
          this.$router.push('/'); // Redireciona para a página inicial
      },
  },
  mounted() {
      // Remove o cabeçalho e o rodape
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      if (header) header.style.display = 'none';
      if (footer) footer.style.display = 'none';

      // Resetar estilos globais do body e html
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden'; // Evita barras de rolagem
      document.documentElement.style.height = '100vh';
  },
  beforeUnmount() {
      // Restaura o cabeçalho e o rodapé ao sair da página
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      if (header) header.style.display = 'block';
      if (footer) footer.style.display = 'block';

      // Restaura os estilos globais do body e html
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
  },
};
</script>

<style scoped>
/* Reset de estilos globais */
.thank-you-page {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh; /* Ocupa 100% da altura da tela */
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #3dcc33 0%, #ffffff 100%); /* Gradiente verde e branco */
  color: #333333; /* Texto escuro */
  font-family: Arial, sans-serif;
  text-align: center;
}

.container {
  max-width: 800px; /* Largura maior */
  padding: 60px; /* Padding maior */
  background-color: #ffffff; /* Fundo branco */
  border-radius: 15px; /* Bordas mais arredondadas */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra mais destacada */
  border: 2px solid #3dcc33; /* Borda verde */
}

h1 {
  font-size: 3rem; /* Título maior */
  color: #3dcc33; /* Verde SuitPay */
  margin-bottom: 30px; /* Espaçamento maior */
}

p {
  font-size: 1.5rem; /* Texto maior */
  line-height: 1.8; /* Espaçamento entre linhas maior */
  color: #555555; /* Texto cinza escuro */
  margin-bottom: 40px; /* Espaçamento maior */
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 16px 32px; /* Botão maior */
  background-color: #3dcc33; /* Verde SuitPay */
  color: #ffffff; /* Texto branco */
  text-decoration: none;
  border-radius: 8px; /* Bordas mais arredondadas */
  font-weight: bold;
  font-size: 1.2rem; /* Texto do botão maior */
  transition: background-color 0.3s ease;
  cursor: pointer; /* Adiciona cursor de ponteiro */
  border: none; /* Remove borda padrão do botão */
}

.btn:hover {
  background-color: #2fa329; /* Verde mais escuro ao passar o mouse */
}
</style>
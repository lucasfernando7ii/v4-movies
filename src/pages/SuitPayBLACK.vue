<template>
  <div class="thank-you-page">
      <div class="container">
          <h1>Obrigado por comprar nosso produto!</h1>
          <p>
              777 777 Agradecemos imensamente por confiar na SuitPay. Seu apoio é fundamental para continuarmos oferecendo soluções inovadoras e de qualidade. Caso precise de ajuda, nossa equipe está à disposição!
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
      // Remove o cabeçalho e o rodapé
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
  background-color: #000; /* Fundo preto */
  color: #fff; /* Texto branco */
  font-family: Arial, sans-serif;
  text-align: center;
}

.container {
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1); /* Fundo semi-transparente */
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(61, 204, 51, 0.5); /* Sombra verde */
}

h1 {
  font-size: 2.5rem;
  color: #3dcc33; /* Verde SuitPay */
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3dcc33; /* Verde SuitPay */
  color: #000; /* Texto preto */
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer; /* Adiciona cursor de ponteiro */
}

.btn:hover {
  background-color: #2fa329; /* Verde mais escuro ao passar o mouse */
}
</style>
<template>
  <div class="thank-you-page">
      <div class="container">
<div
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        border: 1px solid #e5e7eb;
        background-color: #ffffff;
        padding: 1rem;
        max-width: 670px;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    "
>
    <img
            src="https://checkout.homolog.suitpay.app/238/Captura-de-tela-de-2025-05-30-12-09-18.png"
            alt="Oferta Projeto"
            loading="lazy"
            style="
            margin-right: 1.5rem;
            width: 16rem;
            border-radius: 0.5rem;
            max-width: 100%;
        "
    />
    <div style="width: 100%;">
        <h3
                style="
                font-size: 0.875rem;
                color: #1f2937;
                margin: 0 0 0.5rem 0;
            "
        >
            Oferta Projeto
        </h3>

        <div
                style="
                font-size: 1rem;
                line-height: 1.5rem;
                font-weight: 700;
                color: #1f2937;
            "
        >
            R$ 100,00
        </div>

        <div style="margin-top: 0.5rem;">
            <form
                    id="form-upsell-2"
                    method="post"
                    action="https://suitsales.homolog.suitpay.app/api/v1/public/checkout/order_id/payUpSell/2"
            >
                <input
                        type="hidden"
                        name="_token"
                        value="o9WrUIMDW2qollrL1ZEDWzVjBze4ApkbOuVrsQW7"
                        autocomplete="off"
                >
                <button
                        type="submit"
                        style="
                        background-color: #00000000 !important;
                        margin-top: 0.5rem;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.5rem;
                        border-radius: 0.5rem;
                        padding: 1rem;
                        text-align: center;
                        font-size: 1.125rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        transition: all 0.5s ease-in-out;
                        color: #000000 !important;
                        border: none;
                        cursor: pointer;
                        font-family: inherit;"
                >
                    Sim eu aceito.
                </button>
            </form>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const url = new URL(window.location.href);
            const orderId = url.searchParams.get("order_id");
            const form = document.getElementById("form-upsell-2");
            const currentAction = form.getAttribute("action");
            const newAction = currentAction.replace("order_id", orderId);
            form.setAttribute('action', newAction);
        })
    </script>
</div>

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
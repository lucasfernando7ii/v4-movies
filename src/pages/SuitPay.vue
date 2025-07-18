<template>
  <div class="thank-you-page">
    <div class="container">
      <h1>Obrigado por comprar nosso produto!</h1>
      <p>
        Agradecemos imensamente por confiar na SuitPay. Seu apoio é fundamental para continuarmos oferecendo soluções inovadoras e de qualidade. Caso precise de ajuda, nossa equipe está à disposição!
      </p>
      <button class="btn" @click="handleButtonClick">Voltar à Página Inicial</button>

      <!-- BLOCO DE UPSELL -->
      <div class="upsell-card">
        <div class="upsell-content">
          <figure class="upsell-image">
            <img
              src="https://checkout.homolog.suitpay.app/238/Captura-de-tela-de-2025-05-30-12-09-18.png"
              alt="Oferta Projeto"
              loading="lazy"
            />
          </figure>

          <div class="upsell-details">
            <h3>Oferta Projeto</h3>
            <p class="upsell-price">R$ 100,00</p>

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
              />
              <button type="submit" class="upsell-accept">
                Sim, eu aceito essa oferta especial!
              </button>
            </form>

            <a
              href="#"
              class="buttonRejectUpSellTemplate upsell-reject"
            >
              Não, eu recuso essa oferta
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
export default {
  name: 'Suitpay',
  methods: {
    handleButtonClick() {
      this.$router.push('/');
    },
  },
mounted() {

    const url = new URL(window.location.href);
    const orderId = url.searchParams.get("order_id");
    const form = document.getElementById("form-upsell-2");
    if (form && orderId) {
      const currentAction = form.getAttribute("action");
      const newAction = currentAction.replace("order_id", orderId);
      form.setAttribute('action', newAction);
    }

  // Botão de abrir/fechar modal
  const chatButton = document.getElementById("chat-button");
  const chatModal = document.getElementById("chat-modal");

  if (chatButton && chatModal) {
    chatButton.addEventListener("click", () => {
      chatModal.style.display = chatModal.style.display === "none" ? "flex" : "none";
    });
  }

  // Função para gerar sessionId (UUID simplificado)
  function generateSessionId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // Pega ou cria sessionId no localStorage
  let sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem('sessionId', sessionId);
  }

  // Envio de mensagens para o agent do n8n
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");

  input?.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
      const message = input.value.trim();
      if (!message) return;

      messages.innerHTML += `<div><strong>Você:</strong> ${message}</div>`;
      input.value = '';

      try {
        const res = await fetch("https://n8n.suitpay.app/webhook/f8d5f425-562b-47ae-901a-7c71aaa5ac2a/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "sendMessage",
            sessionId: sessionId,
            chatInput: message
          }),
        });

        const data = await res.json();
        messages.innerHTML += `<div><strong>SuitBot:</strong> ${data.output}</div>`;
      } catch (err) {
        messages.innerHTML += `<div style="color:red;">Erro ao contactar o bot</div>`;
      }

      messages.scrollTop = messages.scrollHeight;
    }
  });

  // Estilos extras
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.height = '100vh';
  document.body.style.overflow = 'hidden';
  document.documentElement.style.height = '100vh';

  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  if (header) header.style.display = 'none';
  if (footer) footer.style.display = 'none';
},

  beforeUnmount() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'block';
    if (footer) footer.style.display = 'block';

    document.body.style.margin = '';
    document.body.style.padding = '';
    document.body.style.height = '';
    document.body.style.overflow = '';
    document.documentElement.style.height = '';
  },
};
</script>

<style scoped>

.upsell-card {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  padding: 1.5rem;
  margin-top: 2rem;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
}

.upsell-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.upsell-image {
  aspect-ratio: 16/9;
  width: 100%;
  margin: 0;
  position: relative;
}

.upsell-image img {
  border-radius: 0.5rem;
  position: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.upsell-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upsell-details h3 {
  font-size: 1rem;
  color: #1f2937;
  margin: 0;
}

.upsell-price {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.upsell-accept {
  border: 0;
  cursor: pointer;
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
  border-radius: 9999px;
  background-color: #78f79e;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upsell-reject {
  height: 3rem;
  padding: 0 1.5rem;
  border-radius: 9999px;
  background-color: transparent;
  color: #000;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upsell-reject:hover {
  color: #ef4444;
}

.thank-you-page {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #3dcc33 0%, #ffffff 100%);
  color: #333333;
  font-family: Arial, sans-serif;
  text-align: center;
  position: relative;
}

.container {
  max-width: 800px;
  padding: 60px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #3dcc33;
}

h1 {
  font-size: 3rem;
  color: #3dcc33;
  margin-bottom: 30px;
}

p {
  font-size: 1.5rem;
  line-height: 1.8;
  color: #555555;
  margin-bottom: 40px;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 16px 32px;
  background-color: #3dcc33;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn:hover {
  background-color: #2fa329;
}

/* Estilo do botão de ajuda */
.chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 12px 16px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 9999;
}

/* Estilo do chat modal */
.chat-modal {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  height: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  z-index: 9999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>

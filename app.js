const app = document.getElementById('app');

const pages = {
  home: `<section class="banner-section">
  <h1>Bem-vindo ao Meu Projeto JS</h1>
  <p>SPA dinâmico com seções claras e escuras</p>
</section>`,
  sobre: `<section class="sobre-section">
  <h2>Sobre o Projeto</h2>
  <p>Este projeto demonstra manipulação avançada de DOM e SPA.</p>
</section>`,
  contato: `<section class="contato-section">
  <h2>Contato</h2>
  <form id="contatoForm">
    <input type="text" name="nome" placeholder="Seu nome" required>
    <input type="email" name="email" placeholder="Seu e-mail" required>
    <textarea name="mensagem" placeholder="Mensagem"></textarea>
    <button type="submit">Enviar</button>
  </form>
  <div id="formFeedback"></div>
</section>`
};

function loadPage(page) {
  app.innerHTML = pages[page];
  attachFormValidation();
}

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.dataset.page;
    loadPage(page);
  });
});

function attachFormValidation() {
  const form = document.getElementById('contatoForm');
  const feedback = document.getElementById('formFeedback');
  if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    if(nome === '' || email === '') {
      feedback.textContent = 'Por favor, preencha todos os campos corretamente!';
      feedback.style.color = 'red';
    } else {
      feedback.textContent = 'Formulário enviado com sucesso!';
      feedback.style.color = 'green';
      form.reset();
    }
  });
}

loadPage('home');
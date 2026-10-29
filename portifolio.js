const reduzMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Tema claro/escuro */
const raiz = document.documentElement;
const botaoTema = document.querySelector('.tema-botao');
function aplicarTema(t) {
  raiz.dataset.tema = t;
  botaoTema.textContent = t === 'escuro' ? '☀️' : '🌙';
}
let salvo = null;
try { salvo = localStorage.getItem('tema'); } catch (e) {}
aplicarTema(salvo || (matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro'));
botaoTema.addEventListener('click', () => {
  const novo = raiz.dataset.tema === 'escuro' ? 'claro' : 'escuro';
  aplicarTema(novo);
  try { localStorage.setItem('tema', novo); } catch (e) {}
});

/* Menu no celular */
const botaoMenu = document.querySelector('.menu-botao');
const menu = document.getElementById('menu');
botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', aberto);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('aberto');
    botaoMenu.setAttribute('aria-expanded', 'false');
  }
});

/* Barra de progresso de rolagem */
const barra = document.querySelector('.progresso');
addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - innerHeight;
  barra.style.transform = `scaleX(${total > 0 ? scrollY / total : 0})`;
}, { passive: true });

/* Link ativo no menu */
const links = [...menu.querySelectorAll('a')];
const obs = new IntersectionObserver(entradas => {
  entradas.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(l => l.classList.toggle('ativo', l.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => obs.observe(s));

/* Efeito de digitação */
const alvo = document.getElementById('digitando');
if (alvo && !reduzMovimento) {
  const frases = JSON.parse(alvo.dataset.frases);
  let f = 0, i = 0, apagando = false;
  (function tick() {
    const frase = frases[f];
    i += apagando ? -1 : 1;
    alvo.textContent = frase.slice(0, i);
    let espera = apagando ? 40 : 90;
    if (!apagando && i === frase.length) { apagando = true; espera = 1400; }
    else if (apagando && i === 0) { apagando = false; f = (f + 1) % frases.length; espera = 300; }
    setTimeout(tick, espera);
  })();
}
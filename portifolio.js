(() => {
    'use strict';

    const raiz = document.documentElement;
    const preferenciaMovimento = matchMedia('(prefers-reduced-motion: reduce)');

    /* Tema claro/escuro: preserva a escolha, inclusive se o armazenamento falhar. */
    const botaoTema = document.querySelector('.tema-botao');
    const preferenciaTema = matchMedia('(prefers-color-scheme: dark)');
    let salvo = null;
    try {
        salvo = localStorage.getItem('tema');
    } catch {
        // O site continua funcionando quando o navegador bloqueia o armazenamento.
    }
    let temaEscolhido = salvo === 'claro' || salvo === 'escuro';

    function aplicarTema(tema) {
        raiz.dataset.tema = tema;
        if (botaoTema) {
            botaoTema.textContent = tema === 'escuro' ? 'Tema claro' : 'Tema escuro';
            botaoTema.setAttribute('aria-label', `Ativar tema ${tema === 'escuro' ? 'claro' : 'escuro'}`);
        }
    }

    aplicarTema(temaEscolhido ? salvo : (preferenciaTema.matches ? 'escuro' : 'claro'));
    if (botaoTema) {
        botaoTema.hidden = false;
        botaoTema.addEventListener('click', () => {
            const novo = raiz.dataset.tema === 'escuro' ? 'claro' : 'escuro';
            temaEscolhido = true;
            aplicarTema(novo);
            try {
                localStorage.setItem('tema', novo);
            } catch {
                // Mantém a escolha nesta página mesmo sem persistência.
            }
        });
    }
    preferenciaTema.addEventListener('change', evento => {
        if (!temaEscolhido) aplicarTema(evento.matches ? 'escuro' : 'claro');
    });

    /* Menu mobile: a navegação permanece disponível sem JavaScript. */
    const botaoMenu = document.querySelector('.menu-botao');
    const menu = document.getElementById('menu');
    if (botaoMenu && menu) {
        const telaMobile = matchMedia('(max-width: 768px)');
        const navegacao = botaoMenu.closest('nav');

        function fecharMenu(devolverFoco = false) {
            menu.classList.remove('aberto');
            botaoMenu.setAttribute('aria-expanded', 'false');
            if (devolverFoco) botaoMenu.focus();
        }

        if (navegacao) navegacao.classList.add('menu-pronto');
        botaoMenu.hidden = false;
        botaoMenu.addEventListener('click', () => {
            const aberto = menu.classList.toggle('aberto');
            botaoMenu.setAttribute('aria-expanded', String(aberto));
        });
        menu.addEventListener('click', evento => {
            if (evento.target instanceof Element && evento.target.closest('a')) fecharMenu();
        });
        document.addEventListener('keydown', evento => {
            if (evento.key === 'Escape' && menu.classList.contains('aberto')) fecharMenu(true);
        });
        telaMobile.addEventListener('change', () => {
            const foco = document.activeElement;
            fecharMenu();
            if (telaMobile.matches && menu.contains(foco)) botaoMenu.focus();
            if (!telaMobile.matches && foco === botaoMenu) menu.querySelector('a')?.focus();
        });
    }

    /* Progresso: uma atualização por quadro e cálculo inicial ao abrir a página. */
    const barra = document.querySelector('.progresso');
    if (barra) {
        let quadroPendente = false;
        function atualizarProgresso() {
            const total = raiz.scrollHeight - innerHeight;
            const progresso = total > 0 ? Math.min(1, Math.max(0, scrollY / total)) : 0;
            barra.style.transform = `scaleX(${progresso})`;
            quadroPendente = false;
        }
        function agendarProgresso() {
            if (!quadroPendente) {
                quadroPendente = true;
                requestAnimationFrame(atualizarProgresso);
            }
        }
        addEventListener('scroll', agendarProgresso, { passive: true });
        addEventListener('resize', agendarProgresso);
        addEventListener('load', agendarProgresso);
        atualizarProgresso();
    }

    /* Link ativo: mantém o IntersectionObserver escrito na V2. */
    if (menu && 'IntersectionObserver' in window) {
        const links = [...menu.querySelectorAll('a[href^="#"]')];
        function destacarSecao(id) {
            links.forEach(link => {
                const ativo = link.getAttribute('href') === `#${id}`;
                link.classList.toggle('ativo', ativo);
                if (ativo) link.setAttribute('aria-current', 'location');
                else link.removeAttribute('aria-current');
            });
        }
        const obs = new IntersectionObserver(entradas => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) destacarSecao(entrada.target.id);
            });
        }, { rootMargin: '-20% 0px -65% 0px' });
        document.querySelectorAll('main section[id]').forEach(secao => obs.observe(secao));
    }

    /* Digitação: texto acessível estável, pausa manual e preferência de movimento. */
    const alvo = document.getElementById('digitando');
    const botaoDigitacao = document.querySelector('.digitacao-botao');
    if (alvo) {
        let frases = [];
        try {
            const dados = JSON.parse(alvo.dataset.frases || '[]');
            if (Array.isArray(dados)) frases = dados.filter(frase => typeof frase === 'string' && frase.trim());
        } catch {
            // Conserva o texto do HTML quando a configuração estiver inválida.
        }
        if (frases.length) {
            let f = 0;
            let i = frases[0].length;
            let apagando = false;
            let pausado = false;
            let temporizador;
            const textoInicial = alvo.textContent;

            function tick() {
                const frase = frases[f];
                i += apagando ? -1 : 1;
                i = Math.max(0, Math.min(i, frase.length));
                alvo.textContent = frase.slice(0, i);
                let espera = apagando ? 40 : 90;
                if (!apagando && i === frase.length) {
                    apagando = true;
                    espera = 1400;
                } else if (apagando && i === 0) {
                    apagando = false;
                    f = (f + 1) % frases.length;
                    espera = 300;
                }
                temporizador = setTimeout(tick, espera);
            }

            function atualizarDigitacao() {
                clearTimeout(temporizador);
                if (botaoDigitacao) {
                    botaoDigitacao.hidden = preferenciaMovimento.matches;
                    botaoDigitacao.textContent = pausado ? 'Retomar animação' : 'Pausar animação';
                }
                if (preferenciaMovimento.matches || pausado || document.hidden) {
                    alvo.textContent = textoInicial;
                    return;
                }
                f = 0;
                i = frases[0].length;
                apagando = false;
                alvo.textContent = frases[0];
                temporizador = setTimeout(tick, 1400);
            }

            if (botaoDigitacao) {
                botaoDigitacao.addEventListener('click', () => {
                    pausado = !pausado;
                    atualizarDigitacao();
                });
            }
            preferenciaMovimento.addEventListener('change', atualizarDigitacao);
            document.addEventListener('visibilitychange', atualizarDigitacao);
            atualizarDigitacao();
        }
    }
})();

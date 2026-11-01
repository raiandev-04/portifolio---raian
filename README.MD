# Portfólio — Raian Nunes

Portfólio profissional desenvolvido para apresentar minha trajetória, conhecimentos e projetos na busca por oportunidades como Desenvolvedor Júnior. A V3 mantém a identidade construída durante meus estudos e utiliza HTML, CSS e JavaScript puro, sem frameworks ou etapa de build.

## Projeto online

[Acessar o portfólio no GitHub Pages](https://raiandev-04.github.io/portifolio---raian/).

## Tecnologias utilizadas

- HTML semântico;
- CSS com variáveis de cores, Flexbox, Grid e media queries;
- JavaScript puro;
- Git e GitHub para versionamento;
- GitHub Pages para publicação.

Python e MySQL também aparecem no conteúdo e nos projetos apresentados; não são dependências para executar este site estático.

## Funcionalidades e responsividade

- Navegação por âncoras, indicação da seção ativa e menu para telas menores;
- Temas claro e escuro, com preferência salva quando o navegador permite;
- Barra de progresso da leitura;
- Animação de digitação com controle de pausa e suporte a movimento reduzido;
- Layout responsivo para desktop, tablet e celular;
- Link para pular ao conteúdo, foco visível e controles utilizáveis por teclado;
- Ícones SVG locais em Tecnologias e Contato, sem biblioteca de ícones carregada por CDN;
- Links para repositórios, LinkedIn e e-mail.

O CSS utiliza breakpoints em 768 px e 480 px. A V3 foi revisada em larguras de 320 a 1440 px, nos dois temas.

## Organização da página

Header com a marca R e navegação → Hero → Projetos → Sobre Mim → Tecnologias → Experiência → Formação → Cursos e Certificações → Contato → Footer.

A seção Projetos reúne quatro trabalhos em uma única grade, com capas, descrições, tecnologias e acesso ao GitHub:

- [Sistema de Restaurante — TCC](https://github.com/raiandev-04/TCC): Python, Kivy/KivyMD e MySQL;
- [Chamados Técnicos](https://github.com/raiandev-04/Chamado-Tecnico): HTML, CSS, JavaScript, Node.js, Express e MySQL;
- [CRUD com JavaScript](https://github.com/raiandev-04/CRUD): cadastro de veículos em memória com HTML, CSS e JavaScript;
- [Sistema Caixa](https://github.com/raiandev-04/projetos-python-curso-em-video): aplicação em Python executada no terminal.

As capas são **artes de apresentação baseadas nos projetos**, com dados ilustrativos, e não capturas das aplicações em execução. As referências estão em [imagens/projetos/ORIGEM.md](imagens/projetos/ORIGEM.md). Os fluxos integrados do Restaurante e de Chamados Técnicos ainda possuem pendências de validação registradas no HTML.

## Estrutura dos arquivos

```text
index.html             # Conteúdo e estrutura da página
portifolio.css         # Estilos, temas, estados e responsividade
portifolio.js          # Tema, menu, progresso, seção ativa e digitação
imagens/
    hero.webp          # Ilustração otimizada do Hero
    icones/            # SVGs locais
    projetos/          # Capas PNG e registro de origem
README.MD              # Documentação do projeto
AGENTS.md              # Orientações para colaboração com agentes
```

A imagem do Hero mantém 1254 × 1254 px. O WebP reduziu o arquivo utilizado pela página de 1.777.681 para 181.290 bytes, aproximadamente **89,8%**, após comparação visual na largura de exibição. O PNG original foi preservado como matriz sem perdas para futuras exportações e não é carregado pela página.

## Executar localmente

Não há instalação de dependências nem comandos de build.

1. Abra no VS Code a pasta que contém `index.html`.
2. Com a extensão Live Server disponível, abra `index.html` e use **Open with Live Server** ou **Go Live** quando o servidor estiver parado.
3. Acesse o endereço indicado pela extensão. A porta depende da configuração local.

Também é possível abrir `index.html` diretamente no navegador; prefira um servidor HTTP local para revisar a página. O Live Server é uma ferramenta de desenvolvimento e não uma dependência do site.

### WhatsApp

O portfólio possui contato direto pelo WhatsApp através de um link `wa.me`, com mensagem pré-preenchida.

Ao clicar no contato, o visitante é direcionado para uma conversa comigo no WhatsApp, sem necessidade de formulário ou backend.

## Pendências para V3.1

- Fotos das unidades Anhanguera e SENAI com identificação e origem confirmadas;
- Capturas reais dos projetos após validação dos respectivos ambientes;
- Dados e links de certificados, caso sejam fornecidos;
- Favicon, metadados de SEO e preview de compartilhamento.

Os TODOs no HTML registram os dados pendentes. Não há número fictício de WhatsApp, certificados presumidos ou URLs inventadas de demonstração.

## Desenvolvimento e uso de IA

Este projeto foi desenvolvido por mim, Raian Nunes, com implementação e evolução prática durante meus estudos. Ferramentas de IA foram utilizadas como apoio em planejamento, revisão, refatoração e evolução do código. As decisões e os checkpoints foram discutidos ao longo do desenvolvimento, preservando minha participação na implementação.

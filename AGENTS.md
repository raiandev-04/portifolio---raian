# Instruções para agentes

## Objetivo e tecnologias

Portfólio profissional de Raian Nunes, em português brasileiro, voltado à candidatura para Desenvolvedor Júnior. A V3 é um site estático com HTML, CSS e JavaScript puro, versionado com Git e publicado pelo GitHub Pages. Não há framework, gerenciador de pacotes, dependências de runtime ou etapa de build.

Preserve a identidade e os checkpoints visuais aprovados. Faça mudanças focadas no pedido e mantenha o código compreensível para quem está aprendendo desenvolvimento web. Não migre para React, Bootstrap, Tailwind ou outro framework sem uma solicitação explícita do usuário.

## Estrutura atual

- `index.html`: página única; Header e marca R → Hero → Projetos → Sobre Mim → Tecnologias → Experiência → Formação → Cursos e Certificações → Contato → Footer. Contém `main#conteudo`, link para pular ao conteúdo e navegação por IDs.
- `portifolio.css`: estilos por seções, variáveis em `:root`, Flexbox/Grid, estados de hover/foco, temas e responsividade. Principais breakpoints: 768 px e 480 px.
- `portifolio.js`: tema com persistência protegida contra falhas de armazenamento, menu mobile, barra de progresso, seção ativa com IntersectionObserver e digitação com pausa. O observador do rodapé permite destacar Contato no fim da página.
- `imagens/hero.webp`: imagem utilizada no Hero, com 1254 × 1254 px e 181.290 bytes. O PNG original continua como matriz sem perdas, sem ser carregado pela página.
- `imagens/icones/`: SVGs locais das tecnologias e contatos. Reutilize os arquivos adequados já presentes.
- `imagens/projetos/`: quatro capas PNG de apresentação. `ORIGEM.md` registra as referências e os limites dessas composições.
- `README.MD`: documentação para quem visita ou executa o projeto. Preserve este arquivo existente, inclusive o nome; não crie um segundo README.
- `AGENTS.md`: orientações de manutenção e colaboração.

Preserve os nomes `portifolio.css` e `portifolio.js`, utilizados pelo HTML.

## Conteúdo e projetos

- Os quatro projetos aparecem em uma única seção, sem classificação entre destaques e projetos inferiores: Sistema de Restaurante — TCC, Chamados Técnicos, CRUD com JavaScript e Sistema Caixa.
- Restaurante: Python, Kivy/KivyMD e MySQL. Não apresentar esse projeto como HTML/CSS/JavaScript nem removê-lo por falta de organização ou demonstração online.
- Chamados Técnicos: HTML, CSS, JavaScript, Node.js, Express e MySQL. A presença de integração no código não comprova a execução completa dos fluxos.
- CRUD: cadastro de veículos em memória com HTML, CSS e JavaScript. Não sugerir persistência ou autenticação real sem verificação.
- Sistema Caixa: aplicação Python de terminal. Preserve esse nome na apresentação do portfólio.
- As capas são artes de apresentação, não screenshots das aplicações originais. Preserve as legendas e o registro de origem.
- Não invente cursos, datas, certificados, competências, experiências, imagens de unidades, telefones ou links. Use comentários TODO claros para dados ausentes e explique dependências relevantes ao usuário.
- Preserve os destinos reais existentes no HTML. Links externos abertos em nova aba devem ter `rel="noopener noreferrer"`.

Endereço de publicação informado pelo usuário: https://raiandev-04.github.io/portifolio---raian/. Esse endereço não garante que uma alteração local já esteja publicada; confirme a versão e a configuração de publicação quando a tarefa exigir.

## Convenções de implementação

- Preserve `lang="pt-BR"`, UTF-8 e textos em português brasileiro.
- Use quatro espaços nas alterações e classes descritivas em português. Evite reformatar o projeto inteiro.
- Reutilize variáveis de cores, raios e sombras, mantendo diferenças visuais que expressem hierarquia.
- Preserve os caminhos relativos e a correspondência entre âncoras e IDs.
- Os títulos de seção alinhados à esquerda, fora do Hero, usam traço inferior; Contato permanece centralizado.
- Use JavaScript apenas quando houver necessidade funcional. Não adicione efeitos ou código para preencher arquivos.
- Consolide CSS e remova código somente quando houver evidência de redundância ou falta de uso. Seletores de tema, menu, foco, hover e outros estados não são descartáveis por estarem inativos em uma captura.
- Prefira assets locais leves. Ao otimizar imagens, compare visualmente e preserve dimensões, proporção e transparência necessária. Explique antes de remover um original que possa servir de matriz.

## Acessibilidade, temas e responsividade

- Preserve a semântica, a hierarquia de títulos, o link de salto, os nomes acessíveis dos controles e o foco visível por teclado.
- Ícones acompanhados de nome visível usam `alt=""` quando decorativos. Ilustrações decorativas inline devem ficar fora da árvore acessível e não receber foco.
- Reserve dimensões para imagens e use texto alternativo descritivo quando elas transmitem informação.
- O tema é controlado por `data-tema="claro"` ou `data-tema="escuro"` em `:root`; as cores vêm das variáveis. Preserve a visibilidade do GitHub nos dois temas.
- Respeite `prefers-reduced-motion: reduce`, inclusive digitação, transições e transformações de hover. Mantenha os estados visuais de foco/hover.
- O menu deve manter `aria-expanded`, fechar com Escape e após navegação e tratar o foco ao mudar de breakpoint.
- Preserve `aria-current="location"` no item ativo, incluindo Contato no fim da página e o retorno às seções anteriores.
- Não torne um contato pendente artificialmente clicável. O WhatsApp aguarda número confirmado e possui TODO.
- Evite overflow horizontal a partir de 320 px. Preserve a leitura e a distribuição dos cartões nos dois temas e próximo dos breakpoints.
- Mantenha o conteúdo e os links utilizáveis sem JavaScript; os controles dependentes de inicialização ficam ocultos até estarem prontos.

## Colaboração com o usuário

- Preserve o trabalho local e reconheça as partes implementadas pelo usuário.
- Tarefas simples e reais podem ser reservadas à implementação manual do usuário. Quando houver esse acordo, explique objetivo, arquivo, conceito e resultado esperado; pare antes de entregar a solução completa.
- Revise a tentativa antes de substituí-la. Explique problemas estruturais, de lógica, comportamento ou conteúdo relevante e respeite os pontos de parada combinados.
- Erros pequenos e óbvios, como ortografia, acentuação, indentação, espaços e typos, podem ser corrigidos automaticamente. Informe o que foi corrigido.
- Explique alterações relevantes antes de implementá-las e trabalhe dentro da autorização do usuário.
- Commits devem representar checkpoints funcionais, estáveis e revisados.

## Execução e testes esperados

Abra a pasta que contém `index.html`. Use um servidor HTTP estático disponível, como a extensão Live Server do VS Code, e confira o endereço/porta realmente utilizados. Não invente comandos npm nem tarefas de build. O site também pode ser aberto diretamente no navegador.

Aplique testes proporcionais ao escopo:

- Documentação: conferir nomes e caminhos, links, coerência com o projeto, diff e `git diff --check`. Não modificar código para acompanhar uma atualização documental não autorizada.
- Interface: desktop, tablet e mobile, incluindo 320 px e larguras próximas de 480/768 px; temas claro/escuro; imagens; legibilidade; foco de teclado e ausência de overflow.
- JavaScript e refinamento final: console, âncoras, seção ativa ao descer/subir e no fim da página, menu e Escape, troca de breakpoint, tema e persistência, digitação/pausa, progresso, movimento reduzido e funcionamento sem JavaScript. Ao alterar persistência, confira também a indisponibilidade de armazenamento.
- Links e recursos: conferir destinos reais, caminhos e carregamento. Se um serviço bloquear testes automatizados, informe a limitação; não classifique o link como quebrado apenas por esse bloqueio.
- Execute `git diff --check` e revise o diff final. Informe o que foi testado, os resultados e o que não pôde ser validado.

Não há suíte de testes, lint ou scripts de build configurados no repositório. Não adicione ferramentas ou dependências sem necessidade e autorização compatível com a tarefa.

## Git e checkpoints

- Antes de editar, confira a branch e `git status`; preserve alterações locais e arquivos não rastreados. A V3 foi desenvolvida em `portfolio-v3`; confirme a branch solicitada para cada tarefa.
- Não faça alterações diretamente na `main`. A integração com ela ocorre em checkpoint explicitamente autorizado.
- Não faça commit, push ou merge automaticamente. Ao concluir um checkpoint estável, informe que está pronto para commit e sugira uma mensagem.
- Não execute reset, clean, descarte de alterações, reescrita de histórico, merge destrutivo ou push forçado sem autorização explícita. Não sobrescreva trabalho do usuário.
- Não publique nem altere a configuração de publicação sem autorização.

## Pendências reais para V3.1

Fotos confirmadas da Anhanguera na região do Iguatemi/Salvador e do SENAI Dendezeiros; screenshots reais após validação dos projetos; dados de certificados; número do WhatsApp; favicon, SEO e preview de compartilhamento. Os fluxos integrados do Restaurante e de Chamados Técnicos ainda têm TODOs de validação. Não promova essas pendências a funcionalidades ou dados confirmados.

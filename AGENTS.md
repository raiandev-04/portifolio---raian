# Instruções para agentes

## Visão geral

Portfólio pessoal de Raian Nunes, escrito em português brasileiro. É um site estático com HTML, CSS e JavaScript puro, sem framework, gerenciador de pacotes ou etapa de build.

## Estrutura

- `index.html`: página única com apresentação, sobre, tecnologias, experiência, formação, projeto e contato; carrega o CSS e o JavaScript locais.
- `portifolio.css`: estilos, variáveis de cores em `:root` e regras responsivas nos limites de 768px e 480px.
- `portifolio.js`: arquivo atualmente vazio, reservado para comportamento no navegador.
- `imagens/`: diretório de imagens; atualmente sem arquivos encontrados. O HTML referencia `sua-foto.jpg` e `restaurante.png` nesse diretório.

Mantenha a grafia existente de `portifolio.css` e `portifolio.js`, pois o HTML depende desses nomes.

## Desenvolvimento

Abra `index.html` no navegador para visualizar o site. Também é possível servir a raiz com um servidor HTTP estático disponível no ambiente. Não há comandos de instalação, build, lint ou testes configurados. Não invente comandos npm nem adicione ferramentas ou frameworks sem necessidade para a tarefa.

## Convenções

- Preserve `lang="pt-BR"`, UTF-8 e os textos em português brasileiro.
- Use indentação de quatro espaços nas alterações e mantenha a organização do CSS por seções comentadas.
- Reutilize as variáveis de cores e as classes existentes, com nomes descritivos em português.
- Preserve caminhos relativos para recursos e mantenha links de navegação sincronizados com os IDs de destino.
- Priorize HTML semântico, textos alternativos nas imagens, navegação por teclado e layouts responsivos.
- Em novos links externos com `target="_blank"`, inclua `rel="noopener noreferrer"`.
- Não invente informações pessoais, experiência, URLs de projetos ou perfis sociais. Solicite os dados quando a tarefa depender deles.
- Faça alterações focadas no pedido; não reformate todo o arquivo nem corrija problemas fora do escopo sem necessidade.

## Verificação

Após alterações de interface, confira a página em larguras de desktop, tablet e celular, especialmente ao redor de 768px e 480px. Verifique navegação por âncoras, links, carregamento de imagens, foco de teclado e ausência de rolagem horizontal. Ao adicionar JavaScript, confira também o console do navegador e a interação afetada. Execute `git diff --check` para verificar problemas de espaços e revise o diff antes de concluir. Informe quais verificações foram realizadas e quais não puderam ser feitas.

## Limitações existentes

O HTML contém fechamentos de elementos sem abertura correspondente, referências a `#projetos` sem um elemento com esse ID e links provisórios (`href="#"` e LinkedIn genérico). As imagens referenciadas não estão presentes. Considere isso ao investigar falhas e não apresente esses problemas como regressões de uma alteração nova. A inicialização das instruções não implica autorização para alterar o conteúdo ou o layout do site.

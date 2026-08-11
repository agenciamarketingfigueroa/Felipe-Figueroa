# Felipe Figueroa — site e gestão de alunos

Site institucional/mídia kit estático, com painel local para gestão de alunos e uma sala individual do aluno. Não há banco de dados ou servidor: todas as alterações são guardadas no `localStorage` do navegador.

## Como abrir

Você pode abrir `index.html` diretamente ou iniciar um servidor local na pasta do projeto:

```bash
python3 -m http.server 4173
```

Depois acesse `http://localhost:4173`.

## Rotas principais

- `#home` — site institucional e mídia kit
- `/aulas/` — página não listada de vendas das aulas, formatos e planos
- `#login/professor` — login do professor
- `#login/aluno` — login do aluno
- `#admin` — visão geral do professor, protegida por sessão
- `#agenda` — agenda e links das aulas
- `#alunos` — cadastro e edição dos alunos
- `#atualizar/{id}` — atualização pedagógica com resumo, exercícios e materiais do aluno
- `#materiais` — biblioteca didática e mapa da apostila
- `#pagamentos` — controle local dos pagamentos
- `#aluno/{id}` — sala individual, liberada depois do login

## Acessos

- Professor: na tela de acesso do aluno, use o nome `Felipe Figueroa` e a senha `1508` para abrir a lista geral. Para entrar diretamente em um portal, informe o nome do aluno — por exemplo, `Ana Souza` — e use a senha mestre `1508`.
- Aluno: nome completo cadastrado e senha formada pelo aniversário em `DDMM`. Exemplo: uma pessoa nascida em 15 de abril usa `1504`.
- Dados de demonstração: Ana usa o nome `Ana Souza` e a senha `1504`.

As sessões usam `sessionStorage` e são encerradas ao clicar em **Sair** ou ao fechar a janela do navegador.

## Backup

Use **Exportar dados** ao final do expediente. O sistema baixa um arquivo JSON com alunos, aulas, exercícios, pagamentos e anotações. Para restaurar os dados, use **Importar backup** e selecione esse arquivo.

Os dados ficam somente no navegador/dispositivo atual. Limpar os dados do navegador antes de exportar o backup pode apagar as alterações.

## Apostila integrada

O arquivo `assets/materials/apostila-facilitando-o-violao.pdf` fica disponível na biblioteca do professor e na sala do aluno. A biblioteca organiza as 195 páginas em 9 módulos com atalhos para fundamentos, acordes, tempo, tétrades, solos e pentatônica.

A agenda mostra a **próxima matéria** definida no cadastro de cada aluno, facilitando a preparação da aula e a indicação do módulo correspondente da apostila.

## Finalização da aula

Na agenda, use **Finalizar aula** para abrir a atualização pedagógica daquele aluno. Nessa tela você pode publicar o resumo do encontro, as orientações, o foco da próxima aula, os exercícios da semana, materiais de apoio e uma nota interna. Ao publicar, a aula é marcada como concluída e a nova versão aparece imediatamente na sala do aluno.

## Propostas pelo WhatsApp

Na lista de alunos, o botão com o ícone do WhatsApp abre uma proposta pronta. Escolha o plano e a modalidade, revise a mensagem e, se necessário, edite o preço final para condições especiais. Os preços da página pública e do orçamento são definidos uma única vez em `LESSON_PLANS`, no início de `app.js`.

## Personalização rápida

- Fotos e nomes de artistas: lista `ARTIST_SHOWCASE` em `app.js` e arquivos em `assets/artists/`.
- E-mail de contato: busque por `contato@felipefigueroa.com.br` em `app.js`.
- Imagem principal: `assets/hero-felipe.jpg` (versão otimizada de `assets/hero-felipe.png`).
- Cores e tipografia: variáveis no início de `styles.css`.
- Preços e duração dos planos: constante `LESSON_PLANS` no início de `app.js`.
- Dados iniciais de demonstração: objeto `seedData` em `app.js`.

## Limite do site estático

Os botões de lembrete abrem o WhatsApp ou o aplicativo de e-mail com a mensagem preenchida. Envio automático em segundo plano e sincronização entre dispositivos exigem um backend ou um serviço externo de automação.

O login incluído controla a navegação na interface, mas não é autenticação segura: em um site puramente estático, a senha e os dados existem no navegador e podem ser inspecionados. Para publicar dados pessoais ou financeiros reais na internet, use um backend com autenticação e banco de dados.

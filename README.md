# Focus Timer

## Descrição

O **Focus Timer** é uma aplicação de contador regressivo que ajuda você a gerenciar seu tempo de forma eficiente utilizando a técnica Pomodoro. A aplicação possui modos Light e Dark, toca um som de despertador ao final da contagem e permite tocar um som agradável ao clicar no botão de ativar som, e desativa o audio se for clicado novamente.

## Funcionalidades

- **Contador Regressivo**: Temporizador configurável para sessões de trabalho e intervalos.
- **Modo Light e Dark**: Opção de alternar modo de exibição entre os modos claro e escuro para melhor conforto visual.
- **Som de Despertador**: Toca um som ao final de cada sessão de trabalho ou intervalo.
- **Audio para relaxar a mente**: Reproduz um som ao clicar no icone de 'auto-falante'.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (ES Modules)

## Como Usar

### Pré-requisitos

- Navegador web atualizado

### Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/AndersonChavesS/Projeto-09-Curso-FullStack-RocketSeat.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd Projeto-09-curso-fullstack-rocketseat
    ```
3. Abra o arquivo `index.html` no seu navegador.

### Uso

1. **Configuração do Tempo**: Defina o tempo para as sessões de trabalho e intervalos.
2. **Iniciar o Temporizador**: Clique no botão de play para iniciar o temporizador.
3. **Alternar Modo de exibição**: Use o botão de alternância para mudar entre os modos Light e Dark, de acordo com sua preferência.
4. **Som de Despertador**: Ao final da sessão, um som de despertador será tocado, indicando que o cronômetro foi zerado.
5. **Som de fundo ao Clicar no Ícone Ativar Audio**: Um som será reproduzido ao clicar no botão de play.

## Estrutura do Projeto

```plaintext
Projeto-09-curso-fullstack-rocketseat/
├── assets/
│   ├── bg-audio.mp3
│   ├── button-press.wav
│   ├── favicon.svg
│   └── kichen-timer.mp3
├── src/
│   ├── FocusTimer
│       ├── actions.js
│       ├── elements.js
│       ├── events.js
│       ├── index.js
│       ├── sounds.js
│       ├── state.js
│       └── timer.js
│   ├── main.js
│   ├── toggle.mode.js
├── index.html
├── README.md
└── style.css
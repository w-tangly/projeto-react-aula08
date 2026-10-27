# ⚛️ React Lab — Conceitos Fundamentais do React

Aplicação didática e interativa desenvolvida como atividade prática da **Aula 08 — Projeto React** da disciplina de **Frameworks Front-end**.

O projeto reúne, em uma interface modular e responsiva, os seis pilares fundamentais do desenvolvimento com **React 18**: **JSX**, **Componentes**, **Props**, **Virtual DOM**, **Listas e Keys** e **Renderização Condicional**.

---

## 📌 Sumário

- [Descrição do Projeto](#-descrição-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Conceitos Utilizados](#-conceitos-utilizados)
  - [1. JSX](#1-jsx-javascript-xml)
  - [2. Componentes](#2-componentes-e-composição)
  - [3. Props](#3-props-e-fluxo-unidirecional)
  - [4. Virtual DOM & Reconciliação](#4-virtual-dom--reconciliação)
  - [5. Listas e Keys](#5-listas-e-keys-chaves-únicas)
  - [6. Renderização Condicional](#6-renderização-condicional)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Referências Bibliográficas](#-referências-bibliográficas)
- [Autor](#-autor)

---

## 📝 Descrição do Projeto

O objetivo principal desta aplicação é consolidar a transição da manipulação imperativa tradicional do DOM (com JavaScript vanilla) para o paradigma **declarativo e reativo** do React.

Cada conceito estudado na aula possui uma página dedicada contendo:
1. **Fundamentação teórica direta e objetiva;**
2. **Exemplos de código comentados;**
3. **Simuladores ou demonstrações interativas** onde o usuário pode alterar valores e observar as atualizações em tempo real;
4. **Boas práticas e regras essenciais recomendadas pela documentação oficial do React.**

---

## 🚀 Funcionalidades

- **Navegação Modular:** Catálogo inicial em grid com 6 cartões interativos que conduzem às páginas detalhadas de cada conceito.
- **Calculadora e Interpolação JSX:** Digitação com atualização em tempo real de expressões matemáticas e interpolação de strings.
- **Tabela Comparativa JSX vs HTML:** Demonstração das divergências de atributos (`className`, `htmlFor`, tags auto-fechadas e estilos em objeto).
- **Simulador de Árvore de Componentes:** Mini painel composto por 4 sub-componentes demonstrando modularidade, passagem de propriedades e isolamento de escopo.
- **Painel Interativo de Props:** Cartões de cursos recebendo diferentes tipos de dados (`string`, `number`, `boolean`, `array` e callbacks de funções) com desestruturação e valores padrão.
- **Simulador de Virtual DOM & Diffing:** Visualização lado a lado da árvore virtual (em rascunho de memória) e da árvore do DOM real, demonstrando as 4 etapas de atualização (Gatilho, Render, Reconciliação e Commit).
- **Gerenciador de Coleções com Chaves Únicas:** Inserção e remoção de registros com IDs únicos estáveis, além de busca e filtragem em tempo real encadeando `.filter()` e `.map()`.
- **Laboratório de Renderização Condicional:** Demonstração prática do padrão *early return* (`if`/`return`), operador de curto-circuito (`&&`), operador ternário e simulação assíncrona de estado de carregamento (*loading*).

---

## 📚 Conceitos Utilizados

### 1. JSX (JavaScript XML)
Extensão de sintaxe para JavaScript que descreve visualmente a interface de usuário. Permite incorporar qualquer expressão JavaScript válida entre chaves `{}`.
- Uso de `className` em substituição a `class`;
- Uso de `htmlFor` em substituição a `for`;
- Tags auto-fechadas para elementos vazios (`<img />`, `<input />`);
- Agrupamento limpo de nós usando `React.Fragment` (`<>...</>`) para evitar poluição da árvore DOM.

### 2. Componentes e Composição
Funções JavaScript puras que recebem entradas e retornam JSX. A aplicação demonstra:
- Criação de múltiplos sub-componentes independentes (`CabecalhoModulo`, `AlertaStatus`, `ItemModulo`, `RodapeModulo`);
- Composição hierárquica formando uma árvore de nós;
- Reutilização da mesma estrutura visual com dados dinâmicos variados.

### 3. Props e Fluxo Unidirecional
Propriedades passadas do componente pai para os componentes filhos, garantindo fluxo de dados unidirecional (*top-down*).
- Desestruturação de propriedades na assinatura da função: `function Cartao({ titulo, cargaHoraria, destaque = false })`;
- Passagem de múltiplos tipos de dados: primitivos, coleções e funções manipuladoras de eventos;
- Garantia de imutabilidade (*read-only*): componentes filhos não alteram diretamente as props recebidas.

### 4. Virtual DOM & Reconciliação
Abstração do DOM nativo mantida em memória. O React executa o ciclo em 4 etapas:
1. **Trigger (Gatilho):** O usuário dispara uma ação que altera o estado local via `useState`.
2. **Render (Renderização):** O componente é reexecutado e gera uma nova árvore do Virtual DOM.
3. **Reconciliação (Diffing):** O React compara a nova árvore com o instantâneo anterior para identificar diferenças.
4. **Commit (Atualização):** Aplicação cirúrgica exclusivamente nos nós do DOM real que sofreram mutação.

### 5. Listas e Keys (Chaves Únicas)
Transformação de arrays em elementos de interface utilizando métodos funcionais:
- Mapeamento com `.map()` para geração declarativa de elementos JSX;
- Uso de identificadores únicos e estáveis (`key={item.id}`) para garantir integridade do algoritmo de reconciliação em inserções, exclusões e reordenações;
- Filtragem dinâmica com `.filter()`.

### 6. Renderização Condicional
Técnicas para alternar elementos da interface conforme o estado da aplicação:
- **Early Return:** Encerramento antecipado do componente via `if (...) return <JSX />`;
- **Operador Ternário:** Escolha entre duas opções visuais (`condicao ? <OpcaoA /> : <OpcaoB />`);
- **Curto-circuito (`&&`):** Renderização contextual somente quando a condição for estritamente verdadeira;
- Tratamento de listas vazias e estados temporários de carregamento (*loading*).

---

## 🛠️ Tecnologias Utilizadas

- **[React 18](https://react.dev/):** Biblioteca para construção de interfaces declarativas baseadas em componentes.
- **[Vite 6](https://vite.dev/):** Ferramenta de build de última geração com inicialização instantânea e Hot Module Replacement (HMR).
- **JavaScript (ES6+):** Sintaxe moderna com desestruturação, arrow functions, spreads e template literals.
- **CSS3 Moderno:** Variáveis CSS (design tokens), Grid Layout, Flexbox, media queries e conformidade com acessibilidade visual (WCAG AA).
- **HTML5 Semântico:** Uso apropriado de `<header>`, `<main>`, `<article>`, `<section>`, `<footer>` e atributos de acessibilidade.

---

## ▶️ Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 18 ou superior recomendada)
- **npm** (incluso com o Node.js) ou gerenciador equivalente (yarn, pnpm)

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/pedrocampos-dev/projeto-react-aula08.git
   cd projeto-react-aula08
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador pelo endereço indicado no terminal (normalmente `http://localhost:5173/`).

4. **Gerar a versão otimizada para produção (Build):**
   ```bash
   npm run build
   ```

5. **Visualizar a versão de produção localmente:**
   ```bash
   npm run preview
   ```

---

## 📂 Estrutura de Arquivos

```text
projeto-react-aula08/
├── public/
│   └── favicon.svg                  # Favicon personalizado com o logotipo do React
├── src/
│   ├── components/                  # Os 6 componentes fundamentais
│   │   ├── JSX.jsx                  # Conceito 01: JSX e expressões
│   │   ├── Componentes.jsx          # Conceito 02: Modularidade e composição
│   │   ├── Props.jsx                # Conceito 03: Passagem de dados e desestruturação
│   │   ├── VirtualDOM.jsx           # Conceito 04: Reconciliação e diffing visual
│   │   ├── ListasKeys.jsx           # Conceito 05: map(), filter() e keys estáveis
│   │   └── RenderizacaoCondicional.jsx # Conceito 06: if/return, ternários e &&
│   ├── styles/
│   │   └── global.css               # Folha de estilos global, tokens e responsividade
│   ├── App.jsx                      # Componente raiz, layout e roteamento por estado
│   └── main.jsx                     # Ponto de entrada e montagem no DOM (#root)
├── index.html                       # Documento HTML principal
├── package.json                     # Metadados e dependências do projeto
├── vite.config.js                   # Configuração do Vite e plugin React
├── .gitignore                       # Diretórios e arquivos desconsiderados pelo Git
└── README.md                        # Documentação completa do projeto
```

---

## 📖 Referências Bibliográficas

1. SOUZA, Natan. **Bootstrap 4: conheça a biblioteca front-end mais utilizada no mundo.** São Paulo: Casa do Código, 2018.
2. MACHADO, Kheronn Khennedy. **Angular 11 e Firebase: construindo uma aplicação integrada com a plataforma do Google.** São Paulo: Casa do Código, 2021.
3. EIS, Diego. **Guia Front-end: o caminho das pedras para ser um dev front-end.** São Paulo: Casa do Código, 2015.
4. GONÇALVES, Edson. **Desenvolvendo aplicações Web com JSP, Servlets, JavaServer Faces, Hibernate, EJB 3 Persistence e Ajax.** Rio de Janeiro: Ciência Moderna, 2007.
5. DOCUMENTAÇÃO OFICIAL DO REACT. **React Documentation.** Disponível em: <https://react.dev/>.

---

## 👤 Autor

- **Aluno:** Pedro Campos
- **Disciplina:** Frameworks Front-end
- **Professor:** Prof. Me. Deivison S. Takatu
- **Instituição:** SENAI

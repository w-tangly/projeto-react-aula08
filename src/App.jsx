import { useState } from "react";
import JSX from "./components/JSX.jsx";
import Componentes from "./components/Componentes.jsx";
import Props from "./components/Props.jsx";
import VirtualDOM from "./components/VirtualDOM.jsx";
import ListasKeys from "./components/ListasKeys.jsx";
import RenderizacaoCondicional from "./components/RenderizacaoCondicional.jsx";
import "./styles/global.css";

const conceitos = [
  {
    id: "jsx",
    numero: "01",
    titulo: "JSX",
    descricao: "Sintaxe que une JavaScript e marcação declarativa, expressões e regras de atributos.",
    Componente: JSX,
  },
  {
    id: "componentes",
    numero: "02",
    titulo: "Componentes",
    descricao: "Divisão da interface em blocos modulares, reutilizáveis e organizados em hierarquia.",
    Componente: Componentes,
  },
  {
    id: "props",
    numero: "03",
    titulo: "Props",
    descricao: "Passagem de dados unidirecional entre componentes pais e filhos com desestruturação.",
    Componente: Props,
  },
  {
    id: "virtual-dom",
    numero: "04",
    titulo: "Virtual DOM",
    descricao: "O mecanismo de reconciliação e diffing do React para atualizações cirúrgicas no DOM.",
    Componente: VirtualDOM,
  },
  {
    id: "listas",
    numero: "05",
    titulo: "Listas e Keys",
    descricao: "Renderização de coleções dinâmicas com map(), filtros com filter() e keys únicas.",
    Componente: ListasKeys,
  },
  {
    id: "condicional",
    numero: "06",
    titulo: "Renderização Condicional",
    descricao: "Exibição dinâmica de interfaces utilizando if/return, ternários e operadores lógicos.",
    Componente: RenderizacaoCondicional,
  },
];

function Cabecalho() {
  return (
    <header className="app-header">
      <div className="header-badge">
        <span>⚛️</span> React 18 + Vite
      </div>
      <h1>React Lab</h1>
      <p>
        Aplicação didática e interativa para estudo dos 6 conceitos fundamentais do React.
      </p>
    </header>
  );
}

function Rodape() {
  return (
    <footer className="app-footer">
      <p>
        <strong>Projeto React</strong> — Frameworks Front-end
      </p>
      <p>
        Prof. Me. Deivison S. Takatu · SENAI
      </p>
      <p style={{ marginTop: "8px", opacity: 0.8 }}>
        Desenvolvido por <strong>Pedro Campos</strong>
      </p>
    </footer>
  );
}

export default function App() {
  const [selecionado, setSelecionado] = useState(null);
  const atual = conceitos.find((item) => item.id === selecionado);

  function voltarParaHome() {
    setSelecionado(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function abrirConceito(id) {
    setSelecionado(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (atual) {
    const PaginaConceito = atual.Componente;
    return (
      <div className="page detail-page">
        <button
          className="back-button"
          onClick={voltarParaHome}
          aria-label="Voltar para a página inicial de conceitos"
        >
          ← Voltar aos conceitos
        </button>

        <PaginaConceito />

        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <button className="btn btn-secondary" onClick={voltarParaHome}>
            ← Retornar à tela principal
          </button>
        </div>

        <Rodape />
      </div>
    );
  }

  return (
    <>
      <Cabecalho />
      <main className="page home-page" aria-label="Catálogo de Conceitos React">
        <section className="concept-grid">
          {conceitos.map(({ id, numero, titulo, descricao }) => (
            <button
              className="concept-card"
              key={id}
              onClick={() => abrirConceito(id)}
              aria-label={`Explorar conceito: ${titulo}`}
            >
              <span className="number">{numero}</span>
              <span className="card-title">{titulo}</span>
              <span className="card-description">{descricao}</span>
              <span className="card-action">
                Explorar conceito <span aria-hidden="true">→</span>
              </span>
            </button>
          ))}
        </section>
      </main>
      <Rodape />
    </>
  );
}

import { useState } from "react";

// Sub-componente 1: Cabeçalho da seção
function CabecalhoModulo({ titulo, versao }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e2e8f0", paddingBottom: "8px" }}>
      <h4 style={{ margin: 0, color: "#1e293b" }}>{titulo}</h4>
      <span className="badge badge-primary">{versao}</span>
    </div>
  );
}

// Sub-componente 2: Alerta com transclusão (children)
function AlertaStatus({ tipo = "info", children }) {
  const estilo = tipo === "sucesso"
    ? { background: "#ecfdf5", border: "1px solid #10b981", color: "#065f46" }
    : { background: "#eff6ff", border: "1px solid #3b82f6", color: "#1e40af" };

  return (
    <div style={{ padding: "10px 14px", borderRadius: "8px", margin: "10px 0", fontSize: "13.5px", ...estilo }}>
      {children}
    </div>
  );
}

// Sub-componente 3: Cartão reutilizável
function ItemModulo({ id, titulo, descricao, concluiu, onAlternar }) {
  return (
    <div className={`prop-card ${concluiu ? "highlight" : ""}`} style={{ margin: "8px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h5 style={{ margin: "0 0 4px", fontSize: "15px" }}>{titulo}</h5>
          <p style={{ margin: 0, fontSize: "13px", color: "#64748b" }}>{descricao}</p>
        </div>
        <button
          className={`btn ${concluiu ? "btn-secondary" : ""}`}
          style={{ fontSize: "12px", padding: "6px 10px" }}
          onClick={() => onAlternar(id)}
        >
          {concluiu ? "✓ Concluído" : "Pendente"}
        </button>
      </div>
    </div>
  );
}

// Sub-componente 4: Rodapé da composição
function RodapeModulo({ total, concluidos }) {
  return (
    <div style={{ marginTop: "12px", fontSize: "13px", color: "#64748b", display: "flex", justifyContent: "space-between" }}>
      <span>Progresso: <strong>{concluidos}</strong> de <strong>{total}</strong> módulos</span>
      <span>{concluidos === total ? "🎉 Todos concluídos!" : "Em andamento"}</span>
    </div>
  );
}

// Componente principal exportado
export default function Componentes() {
  const [modulos, setModulos] = useState([
    { id: 1, titulo: "Sintaxe JSX", descricao: "Aprender marcação declarativa", concluiu: true },
    { id: 2, titulo: "Divisão em Componentes", descricao: "Separar a interface em blocos modulares", concluiu: true },
    { id: 3, titulo: "Composição de Telas", descricao: "Montar árvore hierárquica completa", concluiu: false },
  ]);

  function alternarModulo(id) {
    setModulos((lista) =>
      lista.map((item) =>
        item.id === id ? { ...item, concluiu: !item.concluiu } : item
      )
    );
  }

  const concluidosCount = modulos.filter((m) => m.concluiu).length;

  return (
    <article className="concept">
      <div className="concept-header">
        <span className="number">02</span>
        <h2>Componentes</h2>
      </div>
      <p className="concept-subtitle">
        Unidades independentes, reutilizáveis e isoladas que retornam JSX e compõem toda a interface da aplicação.
      </p>

      <h3>1. O Conceito de Componente</h3>
      <p>
        Em React moderno, um componente é uma <strong>função JavaScript</strong> que recebe entradas (props) e retorna a descrição visual da interface (JSX). Ao dividir a página em componentes menores:
      </p>
      <ul>
        <li>O código fica mais limpo e legível;</li>
        <li>Cada parte pode ser testada e alterada de forma independente;</li>
        <li>O mesmo componente pode ser <strong>reutilizado</strong> em diferentes telas e contextos.</li>
      </ul>

      <h3>2. Árvore Hierárquica de Componentes</h3>
      <p>
        Uma aplicação React se organiza como uma árvore onde um componente pai envolve e orquestra componentes filhos:
      </p>

      <div className="tree-box">
{`App (Aplicação)
├── CabecalhoModulo (Título e versão)
├── AlertaStatus (Feedback contextual)
├── ItemModulo (Reutilizado para o Módulo 1)
├── ItemModulo (Reutilizado para o Módulo 2)
├── ItemModulo (Reutilizado para o Módulo 3)
└── RodapeModulo (Sumário de progresso)`}
      </div>

      <h3>3. Demonstração Prática: Composição & Reutilização</h3>
      <p>
        Abaixo, montamos um mini painel demonstrativo combinando 4 sub-componentes independentes. Clique no botão de cada item para alternar seu estado:
      </p>

      <div className="interactive-box">
        <CabecalhoModulo titulo="Trilha de Aprendizado React" versao="v1.0" />

        <AlertaStatus tipo={concluidosCount === modulos.length ? "sucesso" : "info"}>
          {concluidosCount === modulos.length
            ? "Excelente! Você concluiu todos os módulos da lista."
            : `Faltam ${modulos.length - concluidosCount} módulo(s) para completar a trilha.`}
        </AlertaStatus>

        <div style={{ marginTop: "12px" }}>
          {modulos.map((mod) => (
            <ItemModulo
              key={mod.id}
              id={mod.id}
              titulo={mod.titulo}
              descricao={mod.descricao}
              concluiu={mod.concluiu}
              onAlternar={alternarModulo}
            />
          ))}
        </div>

        <RodapeModulo total={modulos.length} concluidos={concluidosCount} />
      </div>

      <div className="note">
        💡 <strong>Regra fundamental:</strong> Em React, o nome de todo componente personalizado <strong>deve iniciar com letra maiúscula</strong> (ex.: <code>ItemModulo</code>). Nomes em minúsculas (como <code>div</code> ou <code>p</code>) são interpretados como tags HTML nativas.
      </div>
    </article>
  );
}

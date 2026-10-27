import { useState } from "react";

// Componente Filho: utiliza desestruturação de props e valores padrão (default props)
function CartaoCurso({
  titulo = "Curso React",
  cargaHoraria = 20,
  destaque = false,
  topicos = [],
  curtidas = 0,
  onCurtir,
}) {
  return (
    <div className={`prop-card ${destaque ? "highlight" : ""}`}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
        <h4 style={{ margin: 0, fontSize: "16px", color: "#0f172a" }}>{titulo}</h4>
        {destaque && <span className="badge badge-primary">⭐ Destaque</span>}
      </div>

      <p style={{ margin: "4px 0", fontSize: "13px", color: "#64748b" }}>
        <strong>Carga horária:</strong> {cargaHoraria} horas (prop do tipo <em>Number</em>)
      </p>

      <div style={{ margin: "10px 0" }}>
        <span style={{ fontSize: "12px", color: "#475569", fontWeight: 600 }}>Tópicos (prop Array):</span>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
          {topicos.map((topico, idx) => (
            <span key={idx} className="badge badge-warning">
              {topico}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px", paddingTop: "10px", borderTop: "1px solid #f1f5f9" }}>
        <span style={{ fontSize: "13px", color: "#334155" }}>
          ❤️ <strong>{curtidas}</strong> curtidas
        </span>
        <button
          className="btn btn-secondary"
          style={{ padding: "5px 12px", fontSize: "12px" }}
          onClick={onCurtir}
        >
          Curtir 👍 (Função via Prop)
        </button>
      </div>
    </div>
  );
}

export default function Props() {
  const [cursos, setCursos] = useState([
    {
      id: 1,
      titulo: "Fundamentos do React",
      cargaHoraria: 40,
      destaque: true,
      topicos: ["JSX", "Componentes", "Props"],
      curtidas: 12,
    },
    {
      id: 2,
      titulo: "Arquitetura e Virtual DOM",
      cargaHoraria: 30,
      destaque: false,
      topicos: ["Reconciliação", "Diffing", "State"],
      curtidas: 8,
    },
    {
      id: 3,
      titulo: "Ecossistema Front-end",
      cargaHoraria: 25,
      destaque: false,
      topicos: ["Vite", "Build Tools", "Deploy"],
      curtidas: 15,
    },
  ]);

  function handleCurtir(id) {
    setCursos((lista) =>
      lista.map((c) => (c.id === id ? { ...c, curtidas: c.curtidas + 1 } : c))
    );
  }

  return (
    <article className="concept">
      <div className="concept-header">
        <span className="number">03</span>
        <h2>Props (Propriedades)</h2>
      </div>
      <p className="concept-subtitle">
        Como dados e comportamentos fluem de maneira unidirecional dos componentes pais para os componentes filhos.
      </p>

      <h3>1. O que são Props e Fluxo Unidirecional</h3>
      <p>
        <strong>Props</strong> (abreviação de <em>properties</em>) são os parâmetros que passamos para um componente React, de forma muito parecida aos argumentos de uma função. No React, os dados fluem <strong>de cima para baixo</strong> (unidirecional): o componente pai controla o estado e distribui as informações para seus filhos.
      </p>

      <div className="steps-pipeline" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="step-card">
          <span className="step-number">Componente Pai (App)</span>
          <div className="step-title">Gerencia o Estado</div>
          <div className="step-desc">Armazena dados, listas e define funções de alteração.</div>
        </div>
        <div className="step-card">
          <span className="step-number">Componente Filho (Cartao)</span>
          <div className="step-title">Recebe Props (Somente Leitura)</div>
          <div className="step-desc">Recebe strings, números, booleanos, arrays e funções via atributos JSX.</div>
        </div>
      </div>

      <h3>2. Desestruturação e Valores Padrão</h3>
      <p>
        Em vez de acessar <code>props.titulo</code> repetidamente, a boa prática da comunidade React é desestruturar as props diretamente na assinatura da função e especificar valores padrão quando necessário:
      </p>

      <pre><code>{`// Desestruturação com valores padrão:
function CartaoCurso({
  titulo = "Sem título",   // String
  cargaHoraria = 20,       // Number
  destaque = false,        // Boolean
  topicos = [],            // Array
  onCurtir                 // Função de callback
}) {
  return <div>{titulo} - {cargaHoraria}h</div>;
}`}</code></pre>

      <h3>3. Demonstração Interativa</h3>
      <p>
        Abaixo, o mesmo componente <code>CartaoCurso</code> é reutilizado 3 vezes. Cada instância recebe valores diferentes de props (incluindo números, booleanos, arrays e uma função de callback para curtidas):
      </p>

      <div className="interactive-box">
        <div className="interactive-box-title">⚡ Experimente: clique em "Curtir" nos cards</div>
        <div className="props-cards-grid">
          {cursos.map((curso) => (
            <CartaoCurso
              key={curso.id}
              titulo={curso.titulo}
              cargaHoraria={curso.cargaHoraria}
              destaque={curso.destaque}
              topicos={curso.topicos}
              curtidas={curso.curtidas}
              onCurtir={() => handleCurtir(curso.id)}
            />
          ))}
        </div>
      </div>

      <div className="note">
        💡 <strong>Regra de Ouro:</strong> Props são <strong>imutáveis</strong> (read-only). Um componente filho nunca deve modificar diretamente as props que recebeu. Se o dado precisar mudar, o componente pai deve alterar seu estado e repassar o novo valor.
      </div>
    </article>
  );
}

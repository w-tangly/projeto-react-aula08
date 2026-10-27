import { useState } from "react";

export default function VirtualDOM() {
  const [nomeReal, setNomeReal] = useState("Ana Silva");
  const [nomeRascunho, setNomeRascunho] = useState("Ana Silva");
  const [contador, setContador] = useState(0);
  const [tempoUltimoCommit, setTempoUltimoCommit] = useState(null);

  const temDiferenca = nomeRascunho !== nomeReal;

  function aplicarMudancas() {
    setNomeReal(nomeRascunho);
    setTempoUltimoCommit(new Date().toLocaleTimeString());
  }

  return (
    <article className="concept">
      <div className="concept-header">
        <span className="number">04</span>
        <h2>Virtual DOM & Reconciliação</h2>
      </div>
      <p className="concept-subtitle">
        Como o React mantém uma representação leve da interface em memória para atualizar cirurgicamente o DOM real do navegador.
      </p>

      <h3>1. As 4 Etapas do Ciclo de Atualização do React</h3>
      <p>
        Em vez de manipular o DOM nativo do navegador manualmente com comandos lentos como <code>document.querySelector()</code> e <code>innerHTML</code>, o React adota uma arquitetura declarativa orientada a 4 fases:
      </p>

      <div className="steps-pipeline">
        <div className="step-card">
          <span className="step-number">Etapa 1</span>
          <div className="step-title">Gatilho (Trigger)</div>
          <div className="step-desc">Um evento do usuário (clique, digitação) altera o estado (<code>useState</code>).</div>
        </div>

        <div className="step-card">
          <span className="step-number">Etapa 2</span>
          <div className="step-title">Renderização</div>
          <div className="step-desc">O React executa o componente e constrói a nova árvore do <strong>Virtual DOM</strong> em memória.</div>
        </div>

        <div className="step-card">
          <span className="step-number">Etapa 3</span>
          <div className="step-title">Reconciliação (Diff)</div>
          <div className="step-desc">O algoritmo compara a nova árvore virtual com a anterior, detectando exatamente o que mudou.</div>
        </div>

        <div className="step-card">
          <span className="step-number">Etapa 4</span>
          <div className="step-title">Atualização (Commit)</div>
          <div className="step-desc">Apenas os nós modificados são aplicados ao DOM real do navegador, com máxima eficiência.</div>
        </div>
      </div>

      <h3>2. Simulador Visual: Virtual DOM vs DOM Real</h3>
      <p>
        Digite no campo abaixo. Observe que a nova árvore virtual registra a alteração instantaneamente em memória (destaque em âmbar), enquanto o DOM do navegador permanece intacto até que ocorra o <em>Commit</em>:
      </p>

      <div className="interactive-box">
        <div className="input-group">
          <label htmlFor="input-vdom"><strong>Novo valor em rascunho:</strong></label>
          <input
            id="input-vdom"
            type="text"
            value={nomeRascunho}
            onChange={(e) => setNomeRascunho(e.target.value)}
            placeholder="Digite para ver a diferença"
          />
          <button
            className="btn"
            onClick={aplicarMudancas}
            disabled={!temDiferenca}
            style={{ opacity: temDiferenca ? 1 : 0.6, cursor: temDiferenca ? "pointer" : "not-allowed" }}
          >
            🚀 Aplicar ao DOM Real (Commit)
          </button>
        </div>

        <div className="trees-grid">
          {/* Árvore do Virtual DOM */}
          <div className="tree-column">
            <h4 style={{ margin: "0 0 10px", color: "#5b50c8" }}>
              🌳 Virtual DOM (Memória)
            </h4>
            <div className="tree-node">&lt;App /&gt;</div>
            <div className="tree-node">&lt;PerfilUsuario /&gt;</div>
            <div className={`tree-node ${temDiferenca ? "pending" : ""}`}>
              {temDiferenca ? "⚠️ " : "✓ "}
              &lt;span&gt;{nomeRascunho || "(vazio)"}&lt;/span&gt;
            </div>
            <small style={{ color: "#64748b" }}>
              {temDiferenca ? "Alteração calculada no Virtual DOM" : "Sincronizado com o DOM real"}
            </small>
          </div>

          {/* Árvore do DOM Real */}
          <div className="tree-column">
            <h4 style={{ margin: "0 0 10px", color: "#059669" }}>
              🌐 DOM Real (Navegador)
            </h4>
            <div className="tree-node">&lt;div id="root"&gt;</div>
            <div className="tree-node">&lt;section class="perfil"&gt;</div>
            <div className="tree-node committed">
              &lt;span&gt;{nomeReal}&lt;/span&gt;
            </div>
            <small style={{ color: "#64748b" }}>
              {tempoUltimoCommit ? `Último commit: ${tempoUltimoCommit}` : "Renderização inicial aplicada"}
            </small>
          </div>
        </div>

        {temDiferenca && (
          <div className="example-output" style={{ background: "#fffbeb", borderLeftColor: "#f59e0b", color: "#b45309" }}>
            <strong>Diferença identificada (Diffing):</strong> O Virtual DOM detectou que o texto precisa mudar de <code>"{nomeReal}"</code> para <code>"{nomeRascunho}"</code>. Clique no botão acima para aplicar a atualização ao DOM real.
          </div>
        )}
      </div>

      <h3>3. Exemplo Prático: Atualizações Cirúrgicas com Contador</h3>
      <p>
        Ao incrementar o contador abaixo, o React executa a reconciliação e altera <strong>apenas o nó de texto do número</strong>, sem recriar nenhum outro elemento ao redor:
      </p>

      <div className="interactive-box" style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
        <button className="btn" onClick={() => setContador((c) => c + 1)}>
          Incrementar Contador ➕
        </button>
        <button className="btn btn-secondary" onClick={() => setContador(0)}>
          Zerar 🔄
        </button>
        <span style={{ fontSize: "16px", fontWeight: 700 }}>
          Valor atual no nó do DOM: <span className="badge badge-primary" style={{ fontSize: "14px" }}>{contador}</span>
        </span>
      </div>

      <div className="note">
        💡 <strong>Por que o Virtual DOM é rápido?</strong> Manipulações no DOM real do navegador disparam cálculos caros de layout (reflow) e repintura (repaint). O Virtual DOM agrupa e otimiza essas mudanças, aplicando no navegador apenas a menor quantidade possível de alterações.
      </div>
    </article>
  );
}

import { useState } from "react";

// Sub-componente 1: Padrão Early Return (if / return antecipado)
function MensagemAcesso({ autenticado, usuario }) {
  if (autenticado) {
    return (
      <div className="example-output" style={{ background: "#ecfdf5", borderLeftColor: "#10b981", color: "#065f46" }}>
        🔒 <strong>Acesso Concedido:</strong> Bem-vindo(a) de volta, <strong>{usuario}</strong>! Você possui permissão de administrador.
      </div>
    );
  }

  return (
    <div className="example-output" style={{ background: "#fffbeb", borderLeftColor: "#f59e0b", color: "#b45309" }}>
      ⚠️ <strong>Acesso Restrito:</strong> Faça login para acessar o painel exclusivo.
    </div>
  );
}

// Sub-componente 2: Operador Ternário e Estado de Carregamento
function PainelBusca({ carregando, buscaExecutada, resultados }) {
  if (carregando) {
    return (
      <div className="example-output" style={{ background: "#eff6ff", borderLeftColor: "#3b82f6", color: "#1e40af" }}>
        ⏳ <em>Buscando dados no servidor... Aguarde.</em>
      </div>
    );
  }

  if (!buscaExecutada) {
    return (
      <p style={{ color: "#64748b", fontSize: "14px", fontStyle: "italic" }}>
        Clique no botão acima para iniciar a busca simulada.
      </p>
    );
  }

  return resultados.length === 0 ? (
    <div className="example-output" style={{ background: "#fef2f2", borderLeftColor: "#ef4444", color: "#991b1b" }}>
      ❌ Nenhum resultado encontrado para o termo pesquisado.
    </div>
  ) : (
    <div className="example-output">
      ✅ <strong>Resultados encontrados:</strong> {resultados.join(", ")}.
    </div>
  );
}

export default function RenderizacaoCondicional() {
  const [autenticado, setAutenticado] = useState(false);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  // Estados para simulação de busca assíncrona
  const [carregando, setCarregando] = useState(false);
  const [buscaExecutada, setBuscaExecutada] = useState(false);
  const [modoVazio, setModoVazio] = useState(false);

  function simularBusca() {
    setCarregando(true);
    setBuscaExecutada(false);

    setTimeout(() => {
      setCarregando(false);
      setBuscaExecutada(true);
    }, 1200);
  }

  return (
    <article className="concept">
      <div className="concept-header">
        <span className="number">06</span>
        <h2>Renderização Condicional</h2>
      </div>
      <p className="concept-subtitle">
        Como controlar o que é exibido na tela de acordo com condições lógicas, estado da aplicação ou dados disponíveis.
      </p>

      <h3>1. Padrão Early Return (<code>if</code> e <code>return</code> antecipado)</h3>
      <p>
        Quando a interface para diferentes condições for completamente distinta, usamos instruções <code>if</code> para retornar o JSX adequado antes de continuar a execução da função:
      </p>

      <pre><code>{`function MensagemAcesso({ autenticado }) {
  if (autenticado) {
    return <p>Bem-vindo de volta!</p>;
  }
  return <p>Entre para continuar.</p>;
}`}</code></pre>

      <div className="interactive-box">
        <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
          <button
            className={`btn ${autenticado ? "btn-secondary" : ""}`}
            onClick={() => setAutenticado(!autenticado)}
          >
            {autenticado ? "🚪 Fazer Logout" : "🔑 Fazer Login"}
          </button>
          <span style={{ fontSize: "14px", color: "#64748b" }}>
            Estado atual: <strong>{autenticado ? "Autenticado (true)" : "Desconectado (false)"}</strong>
          </span>
        </div>

        <MensagemAcesso autenticado={autenticado} usuario="Pedro Campos" />
      </div>

      <h3>2. Operador Lógico <code>&&</code> (Curto-circuito)</h3>
      <p>
        Quando queremos renderizar um elemento <strong>apenas se a condição for verdadeira</strong> (e nada caso seja falsa), o operador <code>&&</code> é a escolha ideal:
      </p>

      <pre><code>{`{autenticado && <PainelAdministrador />}`}</code></pre>

      <div className="interactive-box">
        <button
          className="btn btn-secondary"
          onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
        >
          {mostrarDetalhes ? "Ocultar Detalhes 🔼" : "Mostrar Detalhes 🔽 (via &&)"}
        </button>

        {mostrarDetalhes && (
          <div className="example-output" style={{ marginTop: "12px" }}>
            ℹ️ <strong>Conteúdo Renderizado via operador <code>&amp;&amp;</code>:</strong> Este bloco só existe na árvore do DOM quando <code>mostrarDetalhes</code> for <code>true</code>!
          </div>
        )}
      </div>

      <h3>3. Operador Ternário (<code>condicao ? seVerdadeiro : seFalso</code>) & Loading</h3>
      <p>
        Muito utilizado para alternar entre dois estados de interface, como status de carregamento, sucesso ou erro:
      </p>

      <pre><code>{`{carregando
  ? <p>Buscando...</p>
  : <p>Busca finalizada com sucesso!</p>}`}</code></pre>

      <div className="interactive-box">
        <div className="input-group">
          <button className="btn" onClick={simularBusca} disabled={carregando}>
            {carregando ? "Carregando..." : "🔍 Simular Busca de Dados"}
          </button>

          <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={modoVazio}
              onChange={(e) => setModoVazio(e.target.checked)}
            />
            Simular retorno vazio (sem resultados)
          </label>
        </div>

        <PainelBusca
          carregando={carregando}
          buscaExecutada={buscaExecutada}
          resultados={modoVazio ? [] : ["React 18", "Vite", "JavaScript ES6"]}
        />
      </div>

      <div className="note">
        💡 <strong>Dica de Boas Práticas:</strong> Cuidado com o operador <code>&amp;&amp;</code> ao testar números (ex.: <code>{`itens.length && <Lista />`}</code>). Se <code>itens.length</code> for <code>0</code>, o React renderizará o número <code>0</code> na tela! Prefira sempre <code>{`itens.length > 0 && <Lista />`}</code> ou ternários explícitos.
      </div>
    </article>
  );
}

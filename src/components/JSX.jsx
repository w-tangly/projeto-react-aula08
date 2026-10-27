import { useState } from "react";

export default function JSX() {
  const [nome, setNome] = useState("Maria");
  const [numA, setNumA] = useState(10);
  const [numB, setNumB] = useState(5);

  return (
    <article className="concept">
      <div className="concept-header">
        <span className="number">01</span>
        <h2>JSX (JavaScript XML)</h2>
      </div>
      <p className="concept-subtitle">
        Sintaxe que combina a estrutura declarativa semelhante ao HTML com todo o poder do JavaScript.
      </p>

      <h3>1. O que é JSX e Expressões JavaScript</h3>
      <p>
        No JSX, qualquer expressão JavaScript válida pode ser inserida diretamente no meio da marcação visual utilizando <strong>chaves <code>{`{ }`}</code></strong>.
      </p>

      <pre><code>{`const nome = "${nome}";
const resultado = <p>Olá, {nome}! Soma: {10 + 5} = {15}</p>;`}</code></pre>

      <div className="interactive-box">
        <div className="interactive-box-title">⚡ Experimente na prática</div>
        <div className="input-group">
          <label htmlFor="input-nome"><strong>Nome:</strong></label>
          <input
            id="input-nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite um nome"
          />
        </div>

        <div className="input-group">
          <label htmlFor="num-a"><strong>Número A:</strong></label>
          <input
            id="num-a"
            type="number"
            value={numA}
            onChange={(e) => setNumA(Number(e.target.value) || 0)}
            style={{ width: "90px", minWidth: "90px" }}
          />

          <label htmlFor="num-b"><strong>Número B:</strong></label>
          <input
            id="num-b"
            type="number"
            value={numB}
            onChange={(e) => setNumB(Number(e.target.value) || 0)}
            style={{ width: "90px", minWidth: "90px" }}
          />
        </div>

        <div className="example-output">
          <strong>Resultado JSX:</strong> Olá, <strong>{nome || "visitante"}</strong>! A soma de {numA} + {numB} é igual a <strong>{numA + numB}</strong>.
        </div>
      </div>

      <h3>2. Principais Diferenças entre JSX e HTML</h3>
      <p>
        Como o JSX é transformado em chamadas de funções JavaScript (<code>React.createElement</code>), algumas palavras reservadas do JavaScript exigem nomes alternativos:
      </p>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Regra</th>
            <th>HTML Tradicional</th>
            <th>JSX (React)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Classes CSS</strong></td>
            <td><code>class="card"</code></td>
            <td><code>className="card"</code> (evita conflito com a palavra <code>class</code> do JS)</td>
          </tr>
          <tr>
            <td><strong>Rótulo de formulário</strong></td>
            <td><code>for="input-id"</code></td>
            <td><code>htmlFor="input-id"</code> (evita conflito com o loop <code>for</code> do JS)</td>
          </tr>
          <tr>
            <td><strong>Tags sem fechamento</strong></td>
            <td><code>&lt;img src="..."&gt;</code>, <code>&lt;input&gt;</code></td>
            <td>Sempre auto-fechadas: <code>&lt;img src="..." /&gt;</code>, <code>&lt;input /&gt;</code></td>
          </tr>
          <tr>
            <td><strong>Estilos inline</strong></td>
            <td><code>style="color: red;"</code></td>
            <td>Objeto JavaScript: <code>{'style={{ color: "red" }}'}</code></td>
          </tr>
        </tbody>
      </table>

      <h3>3. Uso de React Fragment (<code>&lt;&gt; &lt;/&gt;</code>)</h3>
      <p>
        Todo componente React deve retornar um único elemento raiz. Quando não desejamos adicionar nós extras desnecessários (como uma <code>&lt;div&gt;</code> a mais) no DOM final, utilizamos o <strong>Fragment</strong>:
      </p>

      <pre><code>{`// Sem poluir o DOM com divs extras:
function ListaSimples() {
  return (
    <>
      <h2>Título</h2>
      <p>Parágrafo irmão sem div externa envolvendo.</p>
    </>
  );
}`}</code></pre>

      <div className="note">
        💡 <strong>Dica de aprendizado:</strong> O JSX não é executado diretamente pelo navegador; ele é compilado por ferramentas como o Vite (via Babel ou SWC) em código JavaScript puro antes de chegar ao usuário final.
      </div>
    </article>
  );
}

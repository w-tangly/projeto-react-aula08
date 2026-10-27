import { useState } from "react";

export default function ListasKeys() {
  const [itens, setItens] = useState([
    { id: 101, nome: "Ana Silva", curso: "Engenharia de Software" },
    { id: 102, nome: "Bruno Costa", curso: "Ciência da Computação" },
    { id: 103, nome: "Carla Dias", curso: "Sistemas de Informação" },
    { id: 104, nome: "Diego Souza", curso: "Engenharia de Software" },
  ]);

  const [novoNome, setNovoNome] = useState("");
  const [novoCurso, setNovoCurso] = useState("Engenharia de Software");
  const [busca, setBusca] = useState("");

  // Adiciona novo item com id incremental estável e único
  function adicionarItem(e) {
    e.preventDefault();
    if (!novoNome.trim()) return;

    const novoId = itens.length > 0 ? Math.max(...itens.map((i) => i.id)) + 1 : 101;
    const novoObjeto = {
      id: novoId,
      nome: novoNome.trim(),
      curso: novoCurso,
    };

    // Imutabilidade: sempre criar um novo array com spread
    setItens([...itens, novoObjeto]);
    setNovoNome("");
  }

  // Remove item por ID único
  function removerItem(id) {
    setItens(itens.filter((item) => item.id !== id));
  }

  // Combinação de filter() e map()
  const itensFiltrados = itens.filter(
    (item) =>
      item.nome.toLowerCase().includes(busca.toLowerCase()) ||
      item.curso.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <article className="concept">
      <div className="concept-header">
        <span className="number">05</span>
        <h2>Listas e Keys (Chaves Únicas)</h2>
      </div>
      <p className="concept-subtitle">
        Como transformar coleções de dados em elementos JSX com <code>map()</code>, selecionar itens com <code>filter()</code> e manter a identidade com a prop <code>key</code>.
      </p>

      <h3>1. Por que usar <code>map()</code> e a Propriedade <code>key</code>?</h3>
      <p>
        No React, transformamos arrays em elementos visuais com a função <code>.map()</code>. Cada elemento retornado na iteração <strong>deve receber uma prop <code>key</code> única e estável</strong>.
      </p>
      <p>
        A <code>key</code> permite ao algoritmo de reconciliação saber com precisão qual item foi adicionado, removido ou reordenado, sem precisar renderizar a lista inteira do zero.
      </p>

      <pre><code>{`// Exemplo do slide da aula com array de objetos e key única:
const alunos = [
  { id: 101, nome: "Ana" },
  { id: 102, nome: "Bruno" },
  { id: 103, nome: "Caio" }
];

{alunos.map((aluno) => (
  <li key={aluno.id}>{aluno.nome}</li>
))}`}</code></pre>

      <h3>2. Combinando <code>filter()</code> e <code>map()</code></h3>
      <p>
        Podemos encadear métodos funcionais de array para primeiro filtrar a coleção e depois mapear para JSX:
      </p>

      <pre><code>{`const alunosFiltrados = alunos
  .filter((aluno) => aluno.nome.toLowerCase().includes(busca.toLowerCase()))
  .map((aluno) => (
    <li key={aluno.id}>{aluno.nome}</li>
  ));`}</code></pre>

      <h3>3. Demonstração Interativa</h3>
      <div className="interactive-box">
        <div className="interactive-box-title">⚡ Gerenciador de Coleção com Chaves Únicas</div>

        {/* Formulário de Adição */}
        <form onSubmit={adicionarItem} className="input-group">
          <input
            type="text"
            placeholder="Nome do aluno..."
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
          <select
            value={novoCurso}
            onChange={(e) => setNovoCurso(e.target.value)}
            style={{ padding: "9px 12px", borderRadius: "6px", border: "1px solid #e2e8f0" }}
          >
            <option value="Engenharia de Software">Engenharia de Software</option>
            <option value="Ciência da Computação">Ciência da Computação</option>
            <option value="Sistemas de Informação">Sistemas de Informação</option>
          </select>
          <button type="submit" className="btn">
            Adicionar Aluno
          </button>
        </form>

        {/* Campo de Busca / Filtro */}
        <div className="input-group" style={{ marginTop: "16px" }}>
          <label htmlFor="busca-aluno"><strong>Filtrar com <code>filter()</code>:</strong></label>
          <input
            id="busca-aluno"
            type="text"
            placeholder="Digite nome ou curso..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          {busca && (
            <button className="btn btn-secondary" onClick={() => setBusca("")} style={{ padding: "6px 12px", fontSize: "12px" }}>
              Limpar filtro
            </button>
          )}
        </div>

        {/* Lista Renderizada */}
        {itensFiltrados.length === 0 ? (
          <div className="example-output" style={{ background: "#fef2f2", borderLeftColor: "#ef4444", color: "#991b1b" }}>
            Nenhum resultado encontrado para o filtro "{busca}".
          </div>
        ) : (
          <ul className="custom-list">
            {itensFiltrados.map((aluno) => (
              <li key={aluno.id} className="custom-list-item">
                <div>
                  <span className="badge badge-primary" style={{ marginRight: "8px" }}>
                    key={aluno.id}
                  </span>
                  <strong>{aluno.nome}</strong> — <span style={{ color: "#64748b" }}>{aluno.curso}</span>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removerItem(aluno.id)}
                  title="Remover elemento da coleção"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="note">
        ⚠️ <strong>Atenção:</strong> Evite usar o índice do array (<code>(item, index) =&gt; key={"{index}"}</code>) quando a lista puder sofrer inserções, remoções ou reordenações. Usar índices pode causar falhas visuais graves e perda de estado interno dos componentes.
      </div>
    </article>
  );
}

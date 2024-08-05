// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 6 },
    { nome: "Ana", nota: 8 },
    { nome: "Lucas", nota: 4 }
  ];
  
  // Função que retorna apenas os alunos com nota maior ou igual a 6
  function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
  }
  
  // Utilizando a função para obter os alunos aprovados
  const alunosAprovados = filtrarAlunosAprovados(alunos);
  
  console.log(alunosAprovados);
  
  
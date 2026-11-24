const fs = require('fs');

function contarPalavras(caminho) {
  const conteudo = fs.readFileSync(caminho, 'utf-8');
  const palavras = conteudo.trim().split(/\s+/).filter(p => p !== '');
  return palavras.length;
}

const arquivo = process.argv[2] || 'texto.txt';
try {
  console.log('Lendo o arquivo');
  const total = contarPalavras(arquivo);
  console.log(`O arquivo "${arquivo}" tem ${total} palavras.`);
} catch (erro) {
  console.log('Erro ao ler o arquivo:', erro.message);
}

console.log('so aparece depois, leitura travou o programa ate terminar.');

const fs = require('fs').promises;

async function contarPalavras(caminho) {
  const conteudo = await fs.readFile(caminho, 'utf-8');
  const palavras = conteudo.trim().split(/\s+/).filter(p => p !== '');
  return palavras.length;
}

async function main() {
  const arquivo = process.argv[2] || 'texto.txt';
  try {
    console.log('Lendo o arquivo');
    const total = await contarPalavras(arquivo);
    console.log(`O arquivo "${arquivo}" tem ${total} palavras.`);
  } catch (erro) {
    console.log('Erro ao ler o arquivo:', erro.message);
  }
}

main();
console.log('aparece antes do resultado, a leitura nao trava o programa.');

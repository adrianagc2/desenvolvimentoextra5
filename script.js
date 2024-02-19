// Criando elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Açai Mais";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);



// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
<div>
  <h2>Açai Queridinho</h2>
  <img src="acaiqueridinho.jpeg" alt="acai queridinho">
  <p> Açaí, nutella, kit kat, morango, leite em pó e leite condensado.</p>
  <p id="preco-acaiqueridinho">R$15.00</p>
  </div>
  `;

  // Adicionando o elemento no dom
  body.appendChild(produto)

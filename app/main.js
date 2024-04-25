import { conexaoApi } from "./conexaoApi.js";
import { deletarProduto } from "./deletarProduto.js";

const catalagoArray = document.getElementById("produtos__catalogo");

function exibirCatalogoNaTela(imagem, nome, preco, id) {
  const listaCatalogo  = document.createElement("li");
  listaCatalogo.classList.add('lista');
  listaCatalogo.innerHTML = `
    <div class="produtos__box" key="${id}">
      <div class="img__div">
        <img class="produto__img" alt="" src="${imagem}"/>
      </div>  
      <h3 class="produto__titulo">${nome}</h3>
      <div class="produto__spans">
        <span class="produto__preco">$ ${parseFloat(preco).toFixed(2)}</span>
        <img class="produto__icon" alt="" src="assets/trash.png" />
      </div>
    </div>
    `
    
  return listaCatalogo;
}

async function exibirCatalogo() {
  const listaApi = await conexaoApi.listaCatalogo();
  await listaApi.forEach(objeto => catalagoArray.appendChild(exibirCatalogoNaTela(objeto.imagem, objeto.nome, objeto.preco, objeto.id)))
  deletarProduto.pegarId();
}

exibirCatalogo();

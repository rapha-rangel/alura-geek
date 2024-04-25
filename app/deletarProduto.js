import { conexaoApi } from "./conexaoApi.js";

function pegarId() {
  let listaCarrosuel = document.querySelectorAll(".produto__icon");
  let listaBox = document.querySelectorAll(".produtos__box");

  async function pegarIdDoItem(item) {
    console.log(listaBox[item].attributes.key.value)
    await conexaoApi.deletarObjeto(listaBox[item].attributes.key.value)
  }

  listaCarrosuel.forEach((item, index) =>{
    item.addEventListener("click", ()=>pegarIdDoItem(index))
  })
}


export const deletarProduto ={
  pegarId
}
import { conexaoApi } from "./conexaoApi.js";

const formulario = document.querySelector("[data-formulario]");

const imgInput = document.querySelector("[input-img]")
const nomeInput = document.querySelector("[input-name]");
const precoInput = document.querySelector("[input-preco]");
const botaoEnviar = document.querySelector(".btn__guardar");


async function criarProduto(evento){
  evento.preventDefault();
  await conexaoApi.criarObjeto(nomeInput.value,imgInput.value,precoInput.value);
}

formulario.addEventListener("submit", evento => criarProduto(evento) );


document.addEventListener('change', (e) => {
  if (
    imgInput.value.length > 1 &&
    nomeInput.value.length > 1 &&
    precoInput.value > 0
  ) {
    botaoEnviar.style.cursor ="pointer";
    botaoEnviar.disabled = false;
    botaoEnviar.style.background ="#03318c";
  } else {
    botaoEnviar.disabled = true;
    botaoEnviar.style.cursor ="not-allowed";
    botaoEnviar.style.background ="#99A3A4";
  }
})
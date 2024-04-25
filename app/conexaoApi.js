
async function listaCatalogo() {
  const res = await fetch("http://localhost:3000/catalogo");
  const responseApi = await res.json();
  return responseApi;
}

async function deletarObjeto(id) {
  const conId = id.toString();
  try{
    const res = await fetch(`http://localhost:3000/catalogo/${id}`, {
      method:"DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    const response = await res.json();
    console.log(response)
    return response;
    }
    catch(err){
      console.log(err)
    }
}

async function maiorId() {
  const array = await listaCatalogo();
  const arrayId =  array.map(item=>item.id)
  const id =(Math.max(...arrayId) +1).toString();
  return id;
}

async function criarObjeto(nome, imagem, preco){
  const id = await maiorId() 
  try{
  const res = await fetch("http://localhost:3000/catalogo", {
    method:"POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      id: id,
      nome: nome,
      imagem: imagem,
      preco: preco
    })
  })
  const response = await res.json();
  return response;
  }
  catch(err){
    console.log(err)
  }
}

export const conexaoApi ={
  listaCatalogo, criarObjeto, deletarObjeto
}
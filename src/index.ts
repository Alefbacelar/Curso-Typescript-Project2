
let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let listaSalva: (string | null) = localStorage.getItem("@listagem_tarefas");
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || [];

function listarTarefas(){
  listElement.innerHTML = "";

  tarefas.map( item => {
    let todoElement = document.createElement("li");
    let tarefaText = document.createTextNode(item);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let posicao = tarefas.indexOf(item);

    linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)
    linkElement.setAttribute("style", "margin-left: 10px")
    
    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    todoElement.appendChild(tarefaText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);

  })

} 


listarTarefas();


function adicionarTarefa() {
  if(inputElement.value === ""){
    alert("Digite alguma tarefa!")
    return false;
  }else{

    let tarefaDigitada: string = inputElement.value;
    tarefas.push(tarefaDigitada);
    
    inputElement.value = "";
    listarTarefas();
    salvarDados();

  }
}

buttonElement.onclick = adicionarTarefa

function deletarTarefa(posicao: number){
  tarefas.splice(posicao, 1);

  listarTarefas();
  salvarDados();

}

function salvarDados(){
  localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas))
}

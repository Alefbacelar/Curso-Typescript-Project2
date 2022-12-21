"use strict";
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var listaSalva = localStorage.getItem("@listagem_tarefas");
var tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
function listarTarefas() {
    listElement.innerHTML = "";
    tarefas.map(function (item) {
        var todoElement = document.createElement("li");
        var tarefasText = document.createTextNode(item);
        todoElement.appendChild(tarefasText);
        listElement.appendChild(todoElement);
    });
}
listarTarefas();
function adicionarTarefas() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        var tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = "";
        listarTarefas();
        salvarDados();
    }
}
buttonElement.onclick = adicionarTarefas;
function salvarDados() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}

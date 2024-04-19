function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual é o apelido do Álvaro?");

    
    if (respostaTime.toLowerCase() === "Bang") {
      alert("Isso mesmo! O Athlético PR é o melhor time!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}
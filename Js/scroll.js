$(document).ready(function(){
    // Adiciona rolagem suave a todos os links
    $("a").on('click', function(event) {
      // Certifique-se de que this.hash tenha um valor antes de substituir o comportamento padrão
      if (this.hash !== "") {
        // Previne o comportamento padrão do clique no âncora
        event.preventDefault();
        // Armazena o hash
        var hash = this.hash;
        // Usa o método animate() do jQuery para adicionar rolagem suave à página
        // O número opcional (800) especifica o número de milissegundos que leva para rolar até a área especificada
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Adiciona o hash (#) à URL quando terminar de rolar (comportamento padrão do clique)
          window.location.hash = hash;
        });
      } // Fim do if
    });
  });
  
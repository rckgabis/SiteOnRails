$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    // Quando a rolagem é maior ou igual a 50 pixels do topo
    // A cor de fundo da barra de navegação muda para branco
    $("#navbar").css("background-color", "white");
    $(".nav-item").css("color", "#6f4a9f");
    $("#logo").attr("src", "images/logo4.png"); // Atualização da imagem da logo
    $("#navbar").css("box-shadow", "0 8px 20px 0 rgb(31 38 135 / 37%)");
  } else {
    // Quando a rolagem é menor que 50 pixels do topo
    // A barra de navegação volta ao estado inicial
    $("#navbar").css("background", "transparent");
    $(".nav-item").css("color", "#FAFAD2");
    $("#logo").attr("src", "images/logo5.png"); // Atualização da imagem da logo
    $("#navbar").css("box-shadow", "none");
  }
});

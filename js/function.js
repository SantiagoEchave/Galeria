$(document).ready(function(){
    var $lienzo = $('<div id="lienzo"></div>');
    var $contenedor = $('<div id="contenedor"></div>');
    var $img = $("<img id='opcion'>");
    var $comentario = $("<p></p>");

    
    $contenedor.append($img);
    $contenedor.append($comentario);
    $lienzo.append($contenedor)
    $("body").append($lienzo);
    
    $($lienzo).hide();
    
    var anchoVentana =$(window).width();
    var altoVentana = $(window).height();
    console.log(anchoVentana,altoVentana);
    var anchoModal = $("#contenedor").width();
    var altoModal = $("#contenedor").height();
    console.log(anchoModal, altoModal);
    var posicionSide = (anchoVentana-anchoModal)/2;
    console.log(posicionSide)
    var posicionHeight = (altoVentana-altoModal)/2;
    
    
    $("#contenedor").css("top",posicionHeight);
    $("#contenedor").css("left",posicionSide);
    
    $("ul li a").click(function(e){
        e.preventDefault();
        //Funcion this(selector palabra reservada, papunta espesificamente a este a)
        //attr(Aplica al elemento obtener atributos etiquetas html)
        var imgHref = $(this).attr("href");
        $img.attr("src", imgHref);
        //
        var capturaCom = $(this).children("img").attr("alt");
        $comentario.text(capturaCom);
        
       $lienzo.fadeIn(); 
    });
    $lienzo.click(function(){
    $lienzo.fadeOut("slow");
    })
});






//    var light = $(".transparencia, .box_principal");
//    light.hide();
//    $(".open_button").click(function(e){
//        e.preventDefault();
//        light.fadeIn();
//    });
//    $(".click").click(function(e){
//        e.preventDefault();
//        light.fadeOut();
//    });
//    var anchoVentana =$(window).width();
//    var altoVentana = $(window).height();
//    console.log(anchoVentana,altoVentana);
//    var anchoModal = $(".box_principal").width();
//    var altoModal = $(".box_principal").height();
//    console.log(anchoModal, altoModal);
//    var posicionSide = (anchoVentana-anchoModal)/2;
//    console.log(posicionSide)
//    var posicionHeight = (altoVentana-altoModal)/2;
//    
//    $(".box_principal").css("top",posicionHeight);
//    $(".box_principal").css("left",posicionSide);



//Ocultar el Ul
//    $("ul").hide();
//    //Apuntar en el DOM click img
//    $(".pete").click(function(e){
//        e.preventDefault();
//        $("ul").slideToggle();
//    });
//
//
////    $(".FirstCont").prepend("<p>Ahhh sos normal?</p>");
//    $(".FirstCont").append("<p>Ahhh sos normal?</p>");





























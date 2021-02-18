$(document).ready(function() {
    console.log("Index Ready")
})

$("a.Inicio").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $(".Colcamas").offset().top
    },1500);
});

$("a.Servicios").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $(".Fondo1").offset().top
    },1500);
});
$("a.Tienda").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $(".Fondo2").offset().top
    },1500);
});
$("a.Contactanos").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $(".Fondo3").offset().top
    },1500);
});
$(".next0").click(function(){
	$(".start-page").fadeOut();
    $(".one").fadeIn();
    $(".one").css("background-color", "#a83232");
});

$(".next1").click(function(){
	$(".one").fadeOut();
    $(".two").fadeIn();
    $(".two").css("background-color","#e39f39");
});

$(".next2").click(function(){
	$(".two").fadeOut();
    $(".three").fadeIn();
    $(".three").css("background-color", "#36332f");    
});

$(".next3").click(function(){
	$(".three").fadeOut();
    $(".four").fadeIn();
    $(".four").css("background-color", "#73a832");
});

$(".next4").click(function(){
	$(".four").fadeOut();
    $(".five").fadeIn();
    $(".five").css("background-color", "#3279a8");
});

$(".next5").click(function(){
	$(".five").fadeOut();
    $(".end-page").fadeIn();    
});

$(".back").click(function(){
    $(".end-page").fadeOut();
    $(".start-page").fadeIn();
});


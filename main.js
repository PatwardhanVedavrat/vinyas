AOS.init();

function displayindicators() {
  $(".prev-icon-container").css("display","block");
  $(".next-icon-container").css("display","block");
}

function hideindicators() {
  $(".prev-icon-container").css("display","none");
  $(".next-icon-container").css("display","none");
}


$(".nav-item").click(function(){
  $(this).prevAll().children(".nav-link").removeClass("nav-link-active");    
  $(this).nextAll().children(".nav-link").removeClass("nav-link-active");    
  $(this).children(".nav-link").addClass("nav-link-active");    
});

$(".nav-drop").click(function(){
  $(".dropdown-arrow").toggleClass("a-rotate");
  $(".about-drpdown-menu").addClass("about-drpdown-menu-open")

  console.log("1");
});

// $(".sm-form-btn").mouseover(function(){
//   $("#btn-arrow").css("transform", "translateX(5px)");
//   $(this).css("transition", "0.3s ease"), function(){
//   $("#btn-arrow").css("transform", "translateX(-5px)");
//   }
// });

$("#csm").hover(function(){
  $("#btn-arrow").toggleClass("btn-arrow-forward")
});

$(".learnmore_1").click(function(){
  $(".learnmore_h6_1").css("color", "#0E33CB")
  $(".learnmore_img_1").attr("src", "./Assets/Vector (13).svg")
});

$(".learnmore_2").click(function(){
  $(".learnmore_h6_2").css("color", "#0E33CB")
  $(".learnmore_img_2").attr("src", "./Assets/Vector (13).svg")
});

$(".learnmore_3").click(function(){
  $(".learnmore_h6_3").css("color", "#0E33CB")
  $(".learnmore_img_3").attr("src", "./Assets/Vector (13).svg")
});

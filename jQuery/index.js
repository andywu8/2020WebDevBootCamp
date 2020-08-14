// $("h1").css("color", "green");
// $("h1").css("font-size");


$("h1").addClass("big-title margin-50");






// $("h1").text("bye");
// $("button").text("dont click me");

// $("button").html("<em>Hey </em> ");

// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");



// $("h1").click()
// for (var i = 0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

$("button").click(function(){
    $("h1").css("color", "purple");
});

// $("input").keypress(function(event){
//     $("h1").text(event.key);
//     // console.log(event.key);
// })

// $("h1").on("click", function(){
//     $("h1").css("color", "purple");
// })

// $("button").on("click", function(){
//     $("h1").fadeToggle()
// })

// $("button").on("click", function(){
//     $("h1").animate({opacity:.5});
// })

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:.5});
})
console.log("on");
$("ul").on("click", "li", function() {
    $(this).toggleClass("competed");
});

// click X to delete
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    e.stopPropagation();
})

$("input[type=text]").keypress(function(e) {
    if (e.which === 13) {
        // grabbing input into a var 
        var todoText = $(this).val();
        // clear input
        $(this).val("");
        // creat new li 
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
    }
});

$("h1").click(function() {
    $("input").fadeToggle();

    console.log("cc");

})






// $("ul").append("<li><span><i class=`fa fa-trash`></i></span>" + todoText + "</li>")
//<i class="fa fa-trash"></i>
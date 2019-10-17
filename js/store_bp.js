$(function() {
    $("#new_commodity").on("click", function() {
        $("#new_store_commodity").css("display", "block");
        $("#commodity").css("display", "none");
    });

    $("#commodity_one").on("click", function() {
        $("#new_store_commodity").css("display", "none");
        $("#commodity").css("display", "block");
    });
    $(".nav_store li").on("click", function() {
        $(this).addClass("current").siblings().removeClass();
    })
})
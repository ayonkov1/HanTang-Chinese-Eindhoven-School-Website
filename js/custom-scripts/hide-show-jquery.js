$(document).ready(function () {
    $(window).on("load", function () {
        $(".hide-show").hide();
    });
    $("#hide").click(function () {
        $(".hide-show").hide();
    });
    $("#show").click(function () {
        $(".hide-show").show();
    });
});
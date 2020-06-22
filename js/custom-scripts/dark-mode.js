$(document).ready(function () {

    $(".a-dark-mode").click(function () {
        var imageUrl = "https://images.unsplash.com/photo-1584888914138-160eaadbb076?ixlib=rb-1.2.1&auto=format&fit=crop&w=1782&q=80";
        $(".background-image").css("background-image", "url(" + imageUrl + ")");
        $(".dark-text-p").css("color", "white");
    });

    $(".a-light-mode").click(function () {
        var imageUrl = "images/background-final.svg";
        $(".background-image").css("background-image", "url(" + imageUrl + ")");
        $(".dark-text-p").css("color", "black");
    });
});

//Run when page is fully loaded
$(document).ready(function () {
    $(".socials").hover(
        function () {
            $(this).find(".tooltip").stop(true).fadeIn(200);
        },
        function () {
            $(this).find(".tooltip").stop(true).fadeOut(200);
        }
    );
});
$(document).ready(function() {
    // Smooth Scrolling for nav links
    $(".skill-button").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });
    $(".project-button").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    });
    $(".contact-button").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});

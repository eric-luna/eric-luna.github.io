$(document).ready(function() {
    // fades in when the page is loaded
    $('body').fadeIn(2000);


    // This is the code for the fixed mobile nav bar. 
    var $mobileNavTrigger = $(".mobile-nav-bar");
    var $targetMobileNav = $(".mobile-nav");
    var showMobileNavClass = "show-mobile-nav";

    $mobileNavTrigger.click(function() {
        $targetMobileNav.toggleClass(showMobileNavClass);
    });
    $('.mobile-link').click(function() {
        $targetMobileNav.toggleClass(showMobileNavClass);
    });

    // This is the code to enable smooth scrolling when nav links are clicked.
    $(".skill-button").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 2000);
    });
    $(".project-button").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 2000);
    });
    $(".contact-button").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });

    // This is the code to add classes when a specific scroll position is reached
    $(window).scroll(function() {
        // Effects for nav links
        if ($(document).scrollTop() > ($("#skills").offset().top) && $(document).scrollTop() < $("#projects").offset().top) {
            $(".skill-button").addClass("selected");
        } else {
            $(".skill-button").removeClass("selected");
        }
        if ($(document).scrollTop() > ($("#projects").offset().top) && $(document).scrollTop() < $("#contact").offset().top - 300) {
            $(".project-button").addClass("selected");
        } else {
            $(".project-button").removeClass("selected");
        }
        if ($(document).scrollTop() > ($("#contact").offset().top - 300) && $(document).scrollTop() < $("#contact").offset().top + 800) {
            $(".contact-button").addClass("selected");
        } else {
            $(".contact-button").removeClass("selected");
        }


        // Scroll effects for skills images when scrolled over
        if ($(document).scrollTop() > ($(".html").offset().top - 185) && $(document).scrollTop() < $(".css").offset().top - 185) {
            $(".html").addClass("skill-scroll");
            $(".html .skill-pic").addClass("pic-scroll");
        } else {
            $(".html").removeClass("skill-scroll");
            $(".html .skill-pic").removeClass("pic-scroll");
        }
        if ($(document).scrollTop() > ($(".css").offset().top - 185) && $(document).scrollTop() < $(".javascript").offset().top - 185) {
            $(".css").addClass("skill-scroll");
            $(".css .skill-pic").addClass("pic-scroll");
        } else {
            $(".css").removeClass("skill-scroll");
            $(".css .skill-pic").removeClass("pic-scroll");
        }
        if ($(document).scrollTop() > ($(".javascript").offset().top - 185) && $(document).scrollTop() < ($(".jquery").offset().top) - 185) {
            $(".javascript").addClass("skill-scroll");
            $(".javascript .skill-pic").addClass("pic-scroll");
        } else {
            $(".javascript").removeClass("skill-scroll");
            $(".javascript .skill-pic").removeClass("pic-scroll");
        }
        if ($(document).scrollTop() > ($(".jquery").offset().top - 185) && $(document).scrollTop() < ($(".sass").offset().top) - 185) {
            $(".jquery").addClass("skill-scroll");
            $(".jquery .skill-pic").addClass("pic-scroll");
        } else {
            $(".jquery").removeClass("skill-scroll");
            $(".jquery .skill-pic").removeClass("pic-scroll");
        }
        if ($(document).scrollTop() > ($(".sass").offset().top - 185) && $(document).scrollTop() < $(".responsive").offset().top - 185) {
            $(".sass").addClass("skill-scroll");
            $(".sass .skill-pic").addClass("pic-scroll");
        } else {
            $(".sass").removeClass("skill-scroll");
            $(".sass .skill-pic").removeClass("pic-scroll");
        }
        if ($(document).scrollTop() > ($(".responsive").offset().top - 185) && $(document).scrollTop() < ($("#projects").offset().top) - 185) {
            $(".responsive").addClass("skill-scroll");
            $(".responsive .skill-pic").addClass("pic-scroll");
        } else {
            $(".responsive").removeClass("skill-scroll");
            $(".responsive .skill-pic").removeClass("pic-scroll");
        }

        // Scroll effects for the project section.

        if ($(document).scrollTop() > ($(".p1").offset().top - 185) && $(document).scrollTop() < ($(".p2").offset().top) - 185) {
            $(".p1 .project-pic").addClass("project-pic-scroll");

        } else {
            $(".p1 .project-pic").removeClass("project-pic-scroll");
        }

        if ($(document).scrollTop() > ($(".p2").offset().top - 185) && $(document).scrollTop() < ($(".p3").offset().top) - 185) {
            $(".p2 .project-pic").addClass("project-pic-scroll");
        } else {
            $(".p2 .project-pic").removeClass("project-pic-scroll");
        }

        if ($(document).scrollTop() > ($(".p3").offset().top - 185) && $(document).scrollTop() < ($(".p4").offset().top) - 185) {
            $(".p3 .project-pic").addClass("project-pic-scroll");

        } else {
            $(".p3 .project-pic").removeClass("project-pic-scroll");

        }

        if ($(document).scrollTop() > ($(".p4").offset().top - 185) && $(document).scrollTop() < ($(".p5").offset().top) - 185) {
            $(".p4 .project-pic").addClass("project-pic-scroll");

        } else {
            $(".p4 .project-pic").removeClass("project-pic-scroll");

        }

        if ($(document).scrollTop() > ($(".p5").offset().top - 185) && $(document).scrollTop() < ($(".p6").offset().top) - 185) {
            $(".p5 .project-pic").addClass("project-pic-scroll");

        } else {
            $(".p5 .project-pic").removeClass("project-pic-scroll");
        }
        if ($(document).scrollTop() > ($(".p6").offset().top - 185) && $(document).scrollTop() < ($(".p7").offset().top) - 185) {
            $(".p6 .project-pic").addClass("project-pic-scroll");

        } else {
            $(".p6 .project-pic").removeClass("project-pic-scroll");
        }
        if ($(document).scrollTop() > ($(".p7").offset().top - 185) && $(document).scrollTop() < ($("footer").offset().top) - 185) {
            $(".p7 .project-pic").addClass("project-pic-scroll");

        } else {
            $(".p7 .project-pic").removeClass("project-pic-scroll");
        }
    });
});
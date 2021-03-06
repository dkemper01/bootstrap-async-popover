//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar i.fa").removeClass("fa-github").addClass("fa-level-up");
        $(".navbar i.fa").off("click");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar i.fa").removeClass("fa-level-up").addClass("fa-github");
        $(".navbar i.fa").on("click", function () {
            window.location.href = "https://github.com/dkemper01/bootstrap-async-popover";
        });
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

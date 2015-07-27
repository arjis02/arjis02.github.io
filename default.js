$(document).ready(function() {

    $('.icon-link').mouseenter(function() {
        $(this).fadeTo('fast', 1);    
    });
    $('.icon-link').mouseleave(function() {
        $(this).fadeTo('fast', 0.5);
    });
});


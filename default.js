$(document).ready(function() {
    $('.header_icon').mouseenter(function() {
        $(this).fadeTo('fast', 1);    
    });
    $('.header_icon').mouseleave(function() {
        $(this).fadeTo('fast', 0.5);
    });
});
$(document).ready(function() {

    $('.center').on('touchstart', function(event) {
        $(this).css('background-color', '#e0e0e0');
        $(this).text('Touch Start');
    });

    $('.center').on('touchend', function(event) {
        $(this).css('background-color', '#fff');
        $(this).text('Touch End');
    });

});

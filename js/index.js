jQuery(document).ready(function () {
    $('.element').on('click', function () {
        console.log("click")
        $(this).addClass('elementExpanded');
        $(this).animate({width:"350px"});
        $('.element').not(this).removeClass('elementExpanded')
        
    });

    $('#block-2').on('click', function () {
        $(this).finish().addClass('info-block-expanded');
        $('#block-1').finish().removeClass('info-block-expanded').addClass('info-block-orange');
        $('#block-3').finish().removeClass('info-block-expanded info-block-gray').addClass('info-block-blue');
        $('#block-4').finish().removeClass('info-block-expanded').addClass('info-block-gray');
    });
    $('#block-3').on('click', function () {
        $(this).finish().addClass('info-block-expanded');
        $('#block-1').finish().removeClass('info-block-expanded').addClass('info-block-orange');
        $('#block-2').finish().removeClass('info-block-expanded info-block-orange').addClass('info-block-blue');
        $('#block-4').finish().removeClass('info-block-expanded').addClass('info-block-gray');
    });
    $('#block-4').on('click', function () {
        $(this).finish().addClass('info-block-expanded');
        $('#block-1').finish().removeClass('info-block-expanded').addClass('info-block-orange');
        $('#block-2').finish().removeClass('info-block-expanded info-block-orange').addClass('info-block-blue');
        $('#block-3').finish().removeClass('info-block-expanded info-block-blue').addClass('info-block-gray');
    });
});// End Document Ready Function
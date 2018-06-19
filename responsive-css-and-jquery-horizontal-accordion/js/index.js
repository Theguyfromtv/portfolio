jQuery(document).ready(function () {
    $('#block-1').on('click mouseover', function () {
        $(this).finish().addClass('info-block-expanded');
        $('#block-2').finish().removeClass('info-block-expanded info-block-blue').addClass('info-block-orange');
        $('#block-3').finish().removeClass('info-block-expanded info-block-gray').addClass('info-block-blue');
        $('#block-4').finish().removeClass('info-block-expanded').addClass('info-block-gray');
    });
    $('#block-2').on('click mouseover', function () {
        $(this).finish().addClass('info-block-expanded');
        $('#block-1').finish().removeClass('info-block-expanded').addClass('info-block-orange');
        $('#block-3').finish().removeClass('info-block-expanded info-block-gray').addClass('info-block-blue');
        $('#block-4').finish().removeClass('info-block-expanded').addClass('info-block-gray');
    });
    $('#block-3').on('click mouseover', function () {
        $(this).finish().addClass('info-block-expanded');
        $('#block-1').finish().removeClass('info-block-expanded').addClass('info-block-orange');
        $('#block-2').finish().removeClass('info-block-expanded info-block-orange').addClass('info-block-blue');
        $('#block-4').finish().removeClass('info-block-expanded').addClass('info-block-gray');
    });
    $('#block-4').on('click mouseover', function () {
        $(this).finish().addClass('info-block-expanded');
        $('#block-1').finish().removeClass('info-block-expanded').addClass('info-block-orange');
        $('#block-2').finish().removeClass('info-block-expanded info-block-orange').addClass('info-block-blue');
        $('#block-3').finish().removeClass('info-block-expanded info-block-blue').addClass('info-block-gray');
    });
});// End Document Ready Function
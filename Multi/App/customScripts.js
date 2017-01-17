const TABLE_HEIGHT_OFFSET = 125; // pixels

// for bootstrap's javascript functionality to work properly...
$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
    $('body').tooltip({ selector: '[data-toggle=tooltip]' });
});

//set height of table dinamically based on browser height. (alternative: media queries in css)
$(window).on('resize', function () {
    var currentHeight = $(window).height();
    var currentWidth = $(window).width();
    setDynamicSizes(currentHeight, currentWidth);
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})

function setDynamicSizes(currentHeight, currentWidth) {
    if (currentHeight < TABLE_HEIGHT_OFFSET) {
        currentHeight = TABLE_HEIGHT_OFFSET * 2;
    }

    $('body').find('#table-fixed').css('height', currentHeight - TABLE_HEIGHT_OFFSET + 'px');
    $('body').find('#tbody-fixed').css('height', currentHeight - TABLE_HEIGHT_OFFSET - 30 + 'px');
    $('.tableContainer').css('height', currentHeight - TABLE_HEIGHT_OFFSET + 'px');
    $('.row-navbar').css('width', currentWidth + 'px');

}

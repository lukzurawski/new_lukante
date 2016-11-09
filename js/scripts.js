$('.site-wrapper').mousemove(function( event ) {

var containerWidth = $(this).innerWidth(),  
    containerHeight = $(this).innerHeight(),
    mousePositionX = (event.pageX / containerWidth) * 10,
    mousePositionY = (event.pageY /containerHeight) * 10;

$(this).css('background-position', mousePositionX + '%' + ' ' + mousePositionY + '%');

});
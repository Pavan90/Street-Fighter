$(document).ready(function(){
$('.ryu').mouseenter(function(){
$('.ryu-still').hide();
$('.ryu-ready').show();
})
.mouseleave(function(){
$('.ryu-ready').hide(); 
$('.ryu-still').show();

})
.mousedown(function(){
 playHadouken();
$('.ryu-ready').hide();
    $('.ryu-throwing').show();
   // $('.hadouken').show();
$('.hadouken').finish().show().animate(
    {'left': '1020px'},
    500,
function () {
$(this).hide();
    $(this).css('left', '520px');

}
);
})
.mouseup(function() {
$('.ryu-throwing').hide();
    $('.ryu-ready').show();
}) ;
    
});

function playHadouken () {
$('#hadouken-sound')[0].volume = 0.5;
    console.log('playHadouken()');
//$('#hadouken-sound')[0].loud();
$('#hadouken-sound')[0].play();

}
/**************pressing key function assignment********************/
$(document).keydown(function(x){
if (x.keycode ==88) {
playCool();
    $('.ryu-action').hide();
    $('.ryu-cool').show();







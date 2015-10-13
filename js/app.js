$(document).ready(function() {
    $('.ryu').mouseenter(function() {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function() {
            $('.ryu-ready').hide();
            $('.ryu-still').show();

        })
        .mousedown(function() {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            // $('.hadouken').show();
            $('.hadouken').finish().show().animate({
                    'left': '1020px'
                },
                500,
                function() {
                    $(this).hide();
                    $(this).css('left', '520px');

                }
            );
        })
        .mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        });

    /**************pressing key function assignment********************/
    $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      playCool();
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('#cool')[0].pause();
      $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
});

var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
   $('#cool')[0].volume = 0.5;
     //$('#cool')[0].load();
    $('#cool')[0].play();
  }
}

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    console.log('playHadouken()');
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();

}

        })
        .mousedown(function() {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            // $('.hadouken').show();
            $('.hadouken').finish().show().animate({
                    'left': '1020px'
                },
                500,
                function() {
                    $(this).hide();
                    $(this).css('left', '520px');

                }
            );
        })
        .mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        });
/**************pressing key function assignment********************/
$(document).keydown(function(keypressed) {
    if (keypressed.keyCode == 88) {
        playSong();
        $(".ryu-ready").hide();
        $(".ryu-still").hide();
        $(".ryu-throwing").unbind('.ryu-throwing', keypressed);
      $('.ryu-cool').show();


    }


}) .keyup(function(keypressed){
$('#theme-song')[0].pause();
      $('#theme-song')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    $('ryu-throwing').hide();
    $('ryu-ready').show();
    $(".main").removeClass('main-x');

});
    

});

function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();

    };
function playSong () {
    $('#theme-song')[0].play();
}

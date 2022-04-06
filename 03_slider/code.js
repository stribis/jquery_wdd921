// Get the width of a slide
let slideWidth = $('.slide').width()

// Add event handlers
$('.right').click( moveRight )
$('.left').click( moveLeft )

// Make sure we start with the first slide and not the second
$('.slide').last().prependTo('.slideshow ul')


/**
 * Responsible for right movement
 */
function moveRight () {

$('.slideshow ul').animate({
    'left': '-=600px'
  }, 
  1000, 
  function () {
    $('.slideshow ul').css('left', '')
    $('.slide').first().appendTo('.slideshow ul')
  })

}

/**
 * Responsible for left movement
 */
function moveLeft () {

  $('.slideshow ul').animate({
    'left': '+=600px'
  }, 
  1000, 
  function () {
    $('.slideshow ul').css('left', '')
    $('.slide').last().prependTo('.slideshow ul')
  })

}

// Autoplay code
let autoplay_timer
$('#autoplay').click(function () {
  if ( $('#autoplay').prop('checked') ) {
    // Autoplay is on
    autoplay_timer = setInterval(function () {
      moveRight()
    }, 3000)
  } else {
    // Autoplay is off
    clearInterval(autoplay_timer)
  }
})
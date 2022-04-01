
$(document).ready( function () { 

  $('.in').hide()
  $('.out').hide()
  $('.square').hover(
    // Mouse In
    function (e) {
      console.log(e)
      console.log('Cursor is in the square')
      $(this).css('background-color', 'red')
      $('.in').slideDown()
      $('.out').slideUp()
    }, 
    // Mouse Out
    function () {
      console.log('Cursor has left the square')
      $(this).css('background-color', 'orange')
      $('.in').slideUp()
      $('.out').slideDown()
    }
  )

})







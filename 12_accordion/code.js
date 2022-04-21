$('.fas').click( function () {
  // Reset all the info boxes (except for the one activated)
  $('.item-info').not($(this).parent().siblings()).slideUp()
  // Reset all icons to a plus (except the one activated)
  $('.fa-minus').not($(this)).removeClass('fa-minus').addClass('fa-plus')

  // Toggle icon classes
  $(this).toggleClass('fa-plus')
  $(this).toggleClass('fa-minus')
  // Slide down info of clicked item
  $(this).parent().siblings().slideToggle()
} )
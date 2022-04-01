//1. Show and Hide
// Click on 'toggle' to hide / show the 'p'

$('#hide').click(function () {
  $('.content').hide(1000)
})

$('#show').click(function () {
  $('.content').show(1000)
})

// $('#toggle').click(function() {
//   if ($('.content').hasClass('active')) {
//     // We want to hide it
//     $('.content').removeClass('active')
//     $('.content').hide(1000)
//   } else {
//     // We want to show it
//     $('.content').addClass('active')
//     $('.content').show(1000)
//   }
// })

$('#toggle').click(function () {
  $('.content').toggle('fast')
})

// 2. Slide

$('#slideDown').click(function () {
  $('.content').slideDown(3000)
})

$('#slideUp').click(function () {
  $('.content').slideUp(3000)
})

$('#toggle-s').click(function () {
  $('.content').slideToggle(1000)
})

// 3. Fade

$('#fadeOut').click(function () {
  $('.content').fadeOut(100000)
})

$('#fadeIn').click(function () {
  $('.content').fadeIn(1000)
})

$('#toggle-f').click(function () {
  $('.content').fadeToggle(1000)
})
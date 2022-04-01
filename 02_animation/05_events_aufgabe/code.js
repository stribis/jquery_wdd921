

// Click

$('.box').click(function () {
  $('.box').html('<span>I was Clicked</span>')
})

// $('.box').on('click', function () {})

// Input

$('input').on('input', function (e) {
  console.log($('input').val())
})
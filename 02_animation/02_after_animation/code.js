

$('#hide').click(function () {
  $('.content').hide(9000, function () {
    console.log('Hide is done :D')
  })

  console.log('Something Else')
})
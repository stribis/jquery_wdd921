

$('.gallery img').click( function () {
  const img_src = $(this).attr('src')

  // console.log(img_src)
  $(`
  <div class="lightbox">
    <img src="${img_src}">
    <div class="close">x</div>
  </div>`)
  .appendTo('body')
} )


// $('.close').click(function () {
//   $('.lightbox').remove()
// })


$(document).on('click', '.close, .lightbox', function () {
  $('.lightbox').remove()
})

// Exercise

// When we click on the add button we should add a square in the container
// When we click on the delete button we should remove the last square from the container
// When we clock on the delete all button we should remove all boxes from the container

$('.add').on('click', function() {
  console.log('Adding Element')
  $('.container').append('<div class="square"></div>')
})

$('.delete').click( function () {
  console.log('Deleting Element')
  $('.square:last-child').remove()
})

$('.delete-all').click( function () {
  console.log('Deleting All Elements')
  $('.square').remove()
})
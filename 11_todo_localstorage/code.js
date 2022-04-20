// Todolist starts with an empty array
// We will use this array to update our local storage
let todoList = []


// Loading the website we ask if there are any items in the localstorage
// if we have items -> we load them in the HTML using the updateList() function
// else -> We let the user know there are no items to be loaded
if ( localStorage.getItem('todos') != null && localStorage.getItem('todos').length > 0 ){
  updateList ()
} else {
  $('.todo-list').html('<li>No items found, please add an item</li>')
}

// Adding a todo
// Each time we add a todo, we reset the HTML and add the whole list again
// We also make sure to update our todoList array to update our localstorage
$('.add-button').click(function(e){
  e.preventDefault()
  $('.todo-list').html('')
  const newTodo = $('#add-todo').val()
  $('#add-todo').val('')
  todoList.push(newTodo)
  localStorage.setItem('todos', todoList)
  updateList ()
})


// Deleting an item
// We get the index of the item using the data attribute
// we remove said index from our array and update localstorage
// we reset the html and add the whole list again.
$(document).on('click','.delete', function (e) {
  const selectedIndex = $(this).parent().data('index')
  todoList.splice(selectedIndex, 1)
  localStorage.setItem('todos', todoList)
  $('.todo-list').html('')
  if ( localStorage.getItem('todos') != null && localStorage.getItem('todos').length > 0 ){
    updateList()
  }
})

// Function responsible for adding the HTML for a new item
function updateList () {
  todoList = localStorage.getItem('todos').split(',')
  todoList.forEach((value, i) => {
    $(`
    <li class="todo-item" data-index="${i}">
      <p class="todo-text">${value}</p>
      <span class="delete">❌</span>
    </li>
    `)
    .appendTo('.todo-list')
  })
}
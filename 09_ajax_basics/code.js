
/**
  For each of the 10 users I need their
  NAME
  EMAIL
  CITY
  WEBSITE as a link

*/



$.ajax({
  url: 'https://jsonplaceholder.typicode.com/users'
})
.done(function (data) {
  console.log(data)
  $(data).each( function () {
    console.log($(this))
    $(`
    <div class="card" style="width: 18rem; margin: 0.8rem;">
      <img class="card-img-top" src="https://robohash.org/${$(this)[0].username}?set=set4" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${$(this)[0].name}</h5>
        <p class="card-text">${$(this)[0].email}</p>
        <p class="card-text">${$(this)[0].address.city}</p>
        <a href="${$(this)[0].website}" class="card-text">Website</a>

      </div>
    </div>
    `).appendTo('.container .row')
  })
})
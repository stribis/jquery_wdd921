

$.getJSON('https://www.amiiboapi.com/api/gameseries', function(gameseries){
  console.log(gameseries)
  const all_series = []
  gameseries.amiibo.forEach(game => {
    all_series.push(game.name)
  })
  const unique_series = [... new Set(all_series)]
  unique_series.forEach( game=> {
      $(`<li class="nav-item game"><a class="nav-link active m-1">${game}</a></li>`).appendTo('.amiibo-gameseries')
  })
  showAmiibos()
})

function showAmiibos () {
  $('.game').click(function () {
    $('.amiibo-container').html('')
    const clickedGame = $(this).text()

    $.getJSON(`https://www.amiiboapi.com/api/amiibo/?gameseries=${clickedGame}`, function(amiibos){
      console.log(amiibos)

      amiibos.amiibo.forEach( item => {
        $(`
          <div class="col-md-2 m-2 card amiibo overflow-hidden">
            <div class="mx-auto img-container">
              <img src="${item.image}" class="card-img-top" alt="${item.name}" >
            </div>
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.gameSeries}</p>
              <span class="release badge bg-primary">au<span class="badge bg-primary hovering">${item.release.au || 'No Release'}</span></span>
              <span class="release badge bg-primary">eu<span class="badge bg-primary hovering">${item.release.eu || 'No Release'}</span></span>
              <span class="release badge bg-primary">jp<span class="badge bg-primary hovering">${item.release.jp || 'No Release'}</span></span>
              <span class="release badge bg-primary">na<span class="badge bg-primary hovering">${item.release.na || 'No Release'}</span></span>
            </div>
          </div>
        `).appendTo('.amiibo-container')
      })
    })
  })
}


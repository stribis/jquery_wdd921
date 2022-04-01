

$('button').click(function () {
  console.log('Box is being animated :D')


  // Animate
  // 1. Object - Animation Properties
  // 2. Duration - MS
  // 3. Callback - Function that will run after animation

  $('.box').animate(
  {
    width: 900,
    height: 900
  }, 
  600, 
  function () {
    console.log('Animation is done')
    $('.box').animate(
      {
        width: 600,
        height: 600
      },
      600
    )
  })

})
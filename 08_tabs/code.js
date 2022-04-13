
// 1. Define global variables 

const wrapper = $('.tab-container')
const allTabsContent = wrapper.find('.tab-inhalt > div')
const tabMenu = wrapper.find('.tab-auswahl > li')
const line = $('<div class="line"></div>').appendTo(tabMenu)


// 2. Hide the tabs that are not first
allTabsContent.not(':first-of-type').hide()

// 3. For Each Tab
// Set the data attribute of the LI and the DIV

tabMenu.each( function (i) {
  $(this).attr('data-tab', 'tab' + i)
} )

allTabsContent.each( function (i) {
  $(this).attr('data-tab', 'tab' + i)
})

// 4. When we click on a menu
tabMenu.click(function () {
  let dataTab = $(this).data('tab')
  let getWrapper = $(this).closest(wrapper)

  // We remove 'active' from the active menu and add it to the clicked menu
  getWrapper.find(tabMenu).removeClass('active')
  $(this).addClass('active')


  // Reset the width of all lines
  getWrapper.find('.line').width(0)
  // Animate the width of clicked element line
  $(this).find('.line').animate({width: '100%'}, 'fast')

  // We reset all the content divs
  getWrapper.find(allTabsContent).hide()
  // show the content div which corresponds to the data attribute
  getWrapper.find(allTabsContent).filter(`[data-tab=${dataTab}]`).show()
})



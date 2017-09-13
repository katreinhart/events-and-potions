document.addEventListener('DOMContentLoaded', function () {
  // Tasks:

  // document.getElementById
  // Find just the title
  var myName = 'Wes'
  var title = document.getElementById('title')
  // Change the text of the title
  // - Choose Your Magical Ingredients
  title.textContent = 'Choose Your Magical Ingredients'
  title.innerHTML = 'Choose Your <b>Magical Ingredients</b>'
  // Change the style of the title
  title.style = 'background-color: purple;'
  title.style = 'color: orange;'

  title.style.backgroundColor = 'purple'
  title.style.color = 'orange'
  // Add a class to the title
  // - Add a class of .princess-font to the title
  title.className = 'princess-font'
  title.className += ' highlighted'

  // document.querySelectorAll
  // Find all the list items
  var allListItems = document.querySelectorAll('li')
  // Find all list items of a specific list
  var plants = document.querySelector('.plants')
  // Add a class of .green to all .plants list items
  // Add a class of .blue to all .liquids list items
  // Add a class of .red to all .animal-parts list items

  // document.createElement
  // Create a new ingredient from scratch!
  var li = document.createElement('li')
  li.textContent = 'Eye of Newt'
  // Add it to one of the lists at the top
  // Add it to one of the lists at the bottom
  // Add it to one of the lists in the middle

  // element.remove()
  // Find and remove specific items
  document.querySelectorAll('li')[8].remove()
})

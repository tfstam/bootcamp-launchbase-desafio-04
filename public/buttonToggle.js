const toggleLists = document.querySelectorAll('.content-toggle h2')

for (let toggleList of toggleLists) {
  toggleList.addEventListener('click', function(e) {
    e.target.classList.toggle('show');
    e.target.nextElementSibling.classList.toggle('hide-content');
  })
}


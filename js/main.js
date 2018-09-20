window.onload = () => {
    
//add class active to clicked nav-link
const navList = document.getElementById('nav-items')
const navListItems = navList.children
navList.addEventListener('click', (e) => {
    for (const navListItem of navListItems) {
        console.log(navListItem)
      navListItem.children[0].classList.remove('active')
    }
  const eventTarget = e.target
  console.log(navListItems)
  
  eventTarget.classList.add('active')
})


}
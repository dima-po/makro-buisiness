const personCards = document.querySelectorAll('.makro-team__card');
const sidebar = document.querySelector('.makro-team__sidebar');
const sidebarOverlay = document.querySelector('.makro-team__sidebar-overlay');
const sidebarBody = document.querySelector('.makro-team__sidebar-body');
const closeSidebar = document.querySelector('.makro-team__sidebar-close');


if(personCards && sidebar && sidebarOverlay && sidebarBody && closeSidebar) {
  personCards.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      document.body.setAttribute('style', 'overflow: hidden;');
      sidebar.classList.add('makro-team__sidebar--active');
      sidebarOverlay.classList.add('makro-team__sidebar-overlay--active');
      sidebarBody.classList.add('makro-team__sidebar-body--active');
    })
  })

  closeSidebar.addEventListener('click', () => {
    document.body.removeAttribute('style', 'overflow: hidden;');
    sidebar.classList.remove('makro-team__sidebar--active');
    sidebarOverlay.classList.remove('makro-team__sidebar-overlay--active');
    sidebarBody.classList.remove('makro-team__sidebar-body--active');
  })

  sidebarOverlay.addEventListener('click', () => {
    document.body.removeAttribute('style', 'overflow: hidden;');
    sidebar.classList.remove('makro-team__sidebar--active');
    sidebarOverlay.classList.remove('makro-team__sidebar-overlay--active');
    sidebarBody.classList.remove('makro-team__sidebar-body--active');
  })
}

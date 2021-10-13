document.addEventListener(
  'DOMContentLoaded', () => {

    const locations = document.querySelectorAll('.makro-locations__stores-group-item');
    const locationButton = document.querySelector('.makro-locations__menu-btn');

    locationButton.addEventListener('click', () => {
      locationButton.classList.toggle('makro-locations__menu-btn--active');
    })
    const removeAllActiveClass = () => {
      locations.forEach((elem) => {
        elem.classList.remove('makro-locations__stores-group-item--active');
      })
    }

    for (const location of locations) {
      location.addEventListener('click', function(event) {
        const parent = event.target.parentElement;
        if (!parent.matches('.makro-locations__inner-list')) { // make sure it's not a click from the dropdown that has bubbled up
          removeAllActiveClass();
          parent.classList.toggle('makro-locations__stores-group-item--active');
        }
      })
    }
    // on outside click, close all dropdowns
    document.addEventListener('click', function(event) {
      const clickedElement = event.target;
      const dropdowns = document.querySelectorAll('.makro-locations__stores-group-item');
      if (clickedElement.closest('.makro-locations__stores-group-item') === null) {
        for (const dropdown of dropdowns) {
          dropdown.classList.remove('makro-locations__stores-group-item--active');
        }
      }
    })
  }
);

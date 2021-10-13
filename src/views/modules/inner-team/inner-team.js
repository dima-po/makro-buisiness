const cards = document.querySelectorAll('.makro-team__card');
const cardClose = document.querySelectorAll('.makro-team__card-details-close');
const cardDetails = document.querySelector('.makro-team__card-details');

if (cards) {

  const removeActiveCard = () => {
    cards.forEach((elem) => {
      elem.classList.remove('makro-team__card--active');
      if(cardDetails) {
        cardDetails.remove();
      }
    })
  }

  const insertAfter = (referenceNode, newNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }



  cards.forEach((elem) => {
    elem.addEventListener('click', (evt) => {
      removeActiveCard();
      const clickedElement = evt.target.closest('.makro-team__card');
      clickedElement.classList.add('makro-team__card--active');

      const details = document.createElement("div");
      details.setAttribute('class', 'makro-team__card-details');
      details.innerHTML = `
          <div class="makro-team__card-details-content">
          <h4 class="makro-team__card-details-person-name">John Doe</h4>
          <p class="makro-team__card-details-person-position">Маркетинг</p>
          <p class="makro-team__card-details-person-description">Nunc malesuada finibus dui, posuere sodales erat sollicitudin non. Mauris auctor felis vel metus consequat, nec eleifend metus placerat. Vivamus venenatis dui at auctor tempus. Phasellus non diam a sem aliquet iaculis. Nunc ut euismod metus. Duis lobortis quis purus sed vulputate. In et ullamcorper urna.</p>
          <button class="makro-team__card-details-close">Закрыть
            <svg class="makro-team__card-details-close-svg" width="20" height="20">
              <use xlink:href="images/sprites.svg#icon-close"></use>
            </svg>
          </button>
        </div>
      `;
      insertAfter(clickedElement, details);
    })
  })
}

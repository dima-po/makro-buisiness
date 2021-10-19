const cards = document.querySelectorAll('.makro-team__card');
const cardClose = document.querySelector('.makro-team__card-details-close');
const cardDetails = document.querySelector('.makro-team__card-details');

if (cards && cardClose) {

  cardClose.addEventListener('click', () => {
    cards.forEach((card) => {
      card.classList.remove('makro-team__card--active');
    })
  })

  const removeActiveCard = () => {
    cards.forEach((card) => {
      card.classList.remove('makro-team__card--active');
    })
  }

  const insertAfter = (referenceNode, newNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  cards.forEach((card) => {
    card.addEventListener('click', (evt) => {
      removeActiveCard();
      const clickedElement = evt.target.closest('.makro-team__card');
      clickedElement.classList.add('makro-team__card--active');
      const fragment = document.createDocumentFragment();
      fragment.appendChild(cardDetails);
      insertAfter(clickedElement, fragment);
    })
  })
}

const cards = document.querySelectorAll('.makro-team__card');
const cardClose = document.querySelectorAll('.makro-team__card-details-close');
const cardDetails = document.querySelector('.makro-team__card-details');

if (cards) {

  const removeActiveCardClass = () => {
    cards.forEach((elem) => {
      elem.classList.remove('makro-team__card--active');
    })
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      cardDetails.classList.add('makro-team__card-details--active');
    })
  })

  cardClose.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      cardDetails.classList.remove('makro-team__card-details--active');
    })
  })
}

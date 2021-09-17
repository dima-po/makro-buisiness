const regions = document.querySelectorAll('.geo__region');
const dataPopup = document.querySelector('.geo__popup-data');

regions.forEach((elem) => {
  elem.addEventListener('mouseover', (event) => {
    const cuurentElement = event.target;
    const parentElementNode = cuurentElement.parentElement;
    dataPopup.innerHTML =
    `
    <div class="geo__region-name">${parentElementNode.getAttribute('data-region')}</div>
    <div class="geo__stores-count">${parentElementNode.getAttribute('data-stores')} магазинов</div>
    `;
  })
})

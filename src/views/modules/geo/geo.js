import anime from 'animejs/lib/anime.es.js';

const regions = document.querySelectorAll('.geo__region');
const geoTitle = document.querySelector('.geo__present-title');
const geoCount = document.querySelector('.geo__present-count');
const geoText = document.querySelector('.geo__present-text');

if (regions && geoTitle && geoCount && geoText) {

  const getRightWord = (value, words = ['Магазин', 'Магазина', 'Магазинов']) => {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if(value > 10 && value < 20) return words[2];
    if(num > 1 && num < 5) return words[1];
    if(num == 1) return words[0];
    return words[2];
  };


  regions.forEach((elem) => {
    elem.addEventListener('mouseover', (event) => {
      const cuurentElement = event.target;
      const parentElementNode = cuurentElement.parentElement;
      geoCount.innerText = `${parentElementNode.getAttribute('data-stores')}`;
      geoTitle.innerHTML = `${parentElementNode.getAttribute('data-region')}`;
      geoText.innerText = getRightWord(parentElementNode.getAttribute('data-stores'));
      showNUmbers.play();
    })

    elem.addEventListener('mouseout', () => {
      geoCount.innerText = geoCount.getAttribute('data-count');
      geoTitle.innerHTML = geoTitle.getAttribute('data-title');
      geoText.innerText = geoText.getAttribute('data-text');
      // showNUmbers.reverse();
    })
  })

  let showNUmbers = anime({
    targets: [geoTitle, geoCount, geoText],
    easing: 'easeInCubic',
    opacity: [0, 1],
    duration: 200
  });
}




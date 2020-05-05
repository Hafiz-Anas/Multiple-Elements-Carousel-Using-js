const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const track = document.querySelector('.track');
let containerWidth = document.querySelector('.container').offsetWidth;

window.addEventListener('click', () => {
    containerWidth = document.querySelector('.container').offsetWidth;
})
let index = 0;

next.addEventListener('click', () => {
    index++;
    prev.classList.add('show');
    track.style.transform = `translateX(-${index * containerWidth}px)`;
    if (track.offsetWidth - (index * containerWidth) < containerWidth) {
        next.classList.add('hide');
      }
})
prev.addEventListener('click', () => {
    index--;
    next.classList.remove('hide');
    if (index === 0) {
        prev.classList.remove('show');
    }
    track.style.transform = `translateX(-${index * containerWidth}px)`;
})
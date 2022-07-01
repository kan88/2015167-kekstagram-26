import { cards } from './generate.js';
import { isEscapeKey } from './util.js';

const containerPictures = document.querySelector('.pictures');
// const pictures = containerPictures.querySelector('.picture');
const intro = document.querySelector('.big-picture');
const bigPicture = intro.querySelector('img');

containerPictures.addEventListener('click', (event) => {
  if (event.target.className === 'picture__img') {
    event.preventDefault();
    intro.classList.remove('hidden');
    bigPicture.src = event.target.src;
    document.querySelector('.likes-count').textContent = document.querySelector('.picture__likes').textContent;
    document.querySelector('.comments-count').textContent = document.querySelector('.picture__comments').textContent;
    intro.querySelector('.social__comment-count').classList.add('hidden');
    intro.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
    cards.forEach((card) => {
      const container = document.querySelector('.social__comments');
      const image = container.querySelectorAll('img');
      const cardCommentators = card.comments;
      const text = container.querySelectorAll('p');
      document.querySelector('.social__caption').textContent = card.description;

      for (let i = 0; i < 2; i++) {
        image[i].src = cardCommentators[i].avatar;
        image[i].alt = cardCommentators[i].name;
        text[i].textContent = cardCommentators[i].message;

      }
    });
  }
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      intro.classList.add('hidden');
    }
  });
  const buttonClose = intro.querySelector('.big-picture__cancel');
  buttonClose.addEventListener('click', (evt) =>{
    evt.preventDefault();
    intro.classList.add('hidden');
  });
});



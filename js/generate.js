import {createCards} from './data.js';
const templateCard = document.querySelector('.template').content;
const pictures = document.querySelector('.pictures');
const cards = createCards();


cards.forEach((card) => {
  const similarCard = templateCard.cloneNode(true);
  similarCard.querySelector('.picture')
    .querySelector('.picture__img').src = card.url;
  similarCard.querySelector('.picture__likes').textContent = card.likes;
  const commentsLength = card.comments.length;
  similarCard.querySelector('.picture__comments').textContent = commentsLength;
  pictures.appendChild(similarCard);
});

export {cards};

const containerPictures = document.querySelector('.pictures');
const pictures = containerPictures.querySelector('.picture');
const intro = document.querySelector('.big-picture');
const bigPicture = intro.querySelector('img');

containerPictures.addEventListener('click', (evt) => {
  if (evt.target.className === 'picture__img') {
    evt.preventDefault();
    intro.classList.remove('hidden');
    bigPicture.src = evt.target.src;
    document.querySelector('.likes-count').textContent = document.querySelector('.picture__likes').textContent;
    document.querySelector('.comments-count').textContent = document.querySelector('.picture__comments').textContent;
    // const commentsContainer = document.querySelector('.social__comments');
    // // const picture = commentsContainer.querySelector('img');
    // console.log(picture)
    // console.log(pictures)

  }
});

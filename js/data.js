import {getRandomInt} from './util.js';

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const names = [
  'Вуди',
  'Кэш',
  'Борис',
  'Фиона',
];

const id = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const photos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const CARDS_NUMBER = 25;

const getUniqueId = (allId) => {
  const index = getRandomInt(0, allId.length -1);
  const uniqueId = allId[index];
  allId.splice(index, 1);
  return uniqueId;
};

const getUniqueComments = () => {
  const getRandomLengthMessages = getRandomInt(1,2);
  const getRandomComment = () =>messages[getRandomInt(0,5)];
  const newComments = [];
  const uniqueComments = [];
  for (let i = 0; i < getRandomLengthMessages; i++) {
    newComments.push(getRandomComment());
  }
  newComments.forEach((element) => {
    if(!uniqueComments.includes(element)){
      uniqueComments.push(element);
    }
  });
  return uniqueComments;
};

const getName = () => names[getRandomInt(0,3)];

const createCard = () => ({
  id: getUniqueId(id),
  url: `photos/${getUniqueId(photos)}`,
  description: 'Моя лучшая фото-карточка',
  likes: getRandomInt(15,200),
  comments: [{
    id: getRandomInt(1,250),
    avatar: `./img/avatar-${getRandomInt(1,6)}.svg`,
    message: getUniqueComments(),
    name: getName()
  }]
});

const createCards = () => Array.from({length:CARDS_NUMBER}, createCard);

export {createCards};

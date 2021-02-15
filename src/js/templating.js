import itemsTemplate from '../templates/gallery-items.hbs';
import dishes from '../menu.json';

const markup = itemsTemplate(dishes);
const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup);
import './css/styles.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

async function handleSubmit(event) {
  event.preventDefault();

  currentQuery =
  event.currentTarget.elements['search-text'].value.trim();

  if (!currentQuery) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });

    return;
  }

  currentPage = 1;
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(
      currentQuery,
      currentPage
    );

    const images = data.hits;
    totalHits = data.totalHits;


      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

    createGallery(images);

    const totalPages = Math.ceil(totalHits / 15);

if (currentPage >= totalPages) {
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
  });
} else {
  showLoadMoreButton();
}
    
    }
    catch(error) {
      iziToast.error({
    message: 'Something went wrong. Please try again!',
  });

    }
    finally {
      hideLoader();
    }
}

async function handleLoadMore() {
  currentPage += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / 15);

    if (currentPage >= totalPages) {
       hideLoadMoreButton();

      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
      });
    } else {
  showLoadMoreButton();
}
    const cards = document.querySelectorAll('.gallery-item');
    if (cards.length === 0) return;
    const cardHeight = cards[0].getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    
  } catch (error) {
    iziToast.error({
    message: 'Something went wrong. Please try again!',
  });
  } finally {
    hideLoader();
  }
}


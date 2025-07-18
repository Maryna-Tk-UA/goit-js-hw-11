import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
        const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
          <a href="${largeImageURL}" class="galery-item">
          <div class="img-container">
        <img src="${webformatURL}" alt="${tags}" class="galery-item-img" width="360">
        </div>
        <ul class="descr-list">
          <li class="descr-list-item">
            <h3 class="title-item">Likes</h3>
            <p class="text-item">${likes}</p>
          </li>
          <li class="descr-list-item">
            <h3 class="title-item">Views</h3>
            <p class="text-item">${views}</p>
          </li>
          <li class="descr-list-item">
            <h3 class="title-item">Comments</h3>
            <p class="text-item">${comments}</p>
          </li>
          <li class="descr-list-item">
            <h3 class="title-item">Downloads</h3>
            <p class="text-item">${downloads}</p>
          </li>
        </ul>
      </a>
    `).join("");

    galleryContainer.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}




// createGallery(images), clearGallery(),  showLoader(),  hideLoader()
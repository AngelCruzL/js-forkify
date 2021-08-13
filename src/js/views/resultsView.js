import View from './View';
import icons from 'url:../../img/icons.svg';

class RecipeView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your search, please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
      <li class="preview">
        <a class="preview__link " href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" crossOrigin="anonymous" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>

          </div>
        </a>
      </li>
    `;
  }
}

export default new RecipeView();

/*
preview__link preview__link--active

 <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
*/
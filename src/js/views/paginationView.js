import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    if (currPage === 1 && numPages > 1)
      return this._generateMarkupButton(currPage);

    if (currPage === numPages && numPages > 1)
      return this._generateMarkupButton(currPage, false);

    if (currPage < numPages) {
      return `
      ${this._generateMarkupButton(currPage)}
      ${this._generateMarkupButton(currPage, false)}
      `;
    }

    return '';
  }

  _generateMarkupButton(currPage, isNextBtn = true) {
    return `
        <button data-goto="${
          isNextBtn ? currPage + 1 : currPage - 1
        }" class="btn--inline pagination__btn--${isNextBtn ? 'next' : 'prev'}">
        ${
          isNextBtn
            ? `
          <span>Page ${currPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
          `
            : `
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
        `
        }
        </button>
      `;
  }
}

export default new PaginationView();

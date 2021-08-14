import View from './View';
import previewView from './previewView';

class RecipeView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your search, please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new RecipeView();

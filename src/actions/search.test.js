import {
  SEARCH_RECIPES_REQUEST,
  searchRecipesRequest,
  SEARCH_RECIPES_SUCCESS,
  searchRecipesSuccess,
  SEARCH_RECIPES_ERROR,
  searchRecipesError,
} from './search';

describe('fetchRecipesSuccess', () => {
  it('Should return the action', () => {
    const recipes = []
    const action = searchRecipesSuccess(recipes);
    expect(action.type).toEqual(SEARCH_RECIPES_SUCCESS);
    expect(action.recipes).toEqual(recipes);
  })
})

describe('fetchRecipesRequest', () => {
  it('Should return the action', () => {
    const action = searchRecipesRequest();
    expect(action.type).toEqual(SEARCH_RECIPES_REQUEST);
  })
})

describe('fetchRecipesError', () => {
  it('Should return the action', () => {
    const error = 'bacon ipsum error';
    const action = searchRecipesError(error);
    expect(action.type).toEqual(SEARCH_RECIPES_ERROR);
    expect(action.error).toEqual(error);
  })
})
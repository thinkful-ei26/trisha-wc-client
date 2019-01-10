import {
  SURPRISE_CLICK,
  surpriseClick,
  VIEW_ALL_RECIPES,
  allRecipes,
  TOGGLE_EXPAND,
  toggleExpand,
  FETCH_RECIPES_REQUEST,
  fetchRecipesRequest,
  FETCH_RECIPES_SUCCESS,
  fetchRecipesSuccess,
  FETCH_RECIPES_ERROR,
  fetchRecipesError
} from './index';

describe('supriseClick', () => {
  it('Should return the action', () => {
    const action = surpriseClick();
    expect(action.type).toEqual(SURPRISE_CLICK);
  })
})

describe('allRecipes', () => {
  it('Should return the action', () => {
    const action = allRecipes();
    expect(action.type).toEqual(VIEW_ALL_RECIPES);
  })
})

describe('toggleExpand', () => {
  it('Should return the action', () => {
    const id = '00001';
    const action = toggleExpand(id);
    expect(action.type).toEqual(TOGGLE_EXPAND);
    expect(action.id).toEqual(id);
  })
})
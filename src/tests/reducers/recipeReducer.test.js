import { recipeReducer } from '../../reducers/recipeReducer';
import fetchRecipes, { 
  surpriseClick,
  allRecipes,
  toggleExpand,
  fetchRecipesError,
  fetchRecipesSuccess,
  fetchRecipesRequest,
} from '../../actions';

describe('recipeReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = recipeReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      recipes: [],
      loading: false,
      error: null,
      surprise: false,
      surpriseRecipes: []
    });
  });

  it('Should return the current state on an unknown action', () => {
      let currentState = {};
      const state = recipeReducer(currentState, {type: '__UNKNOWN'});
      expect(state).toBe(currentState);
  });


  describe('fetchRecipeSuccess', () => {
    it('Should replace the entire state', () => {
      const recipes = ['recipe1', 'recipe2']
      const _state = { 
        error: null,
        loading: false,
        recipes  
      }
        
      const state = recipeReducer(_state, fetchRecipesSuccess(recipes));
      expect(state).toEqual(_state);
    });
  });

})
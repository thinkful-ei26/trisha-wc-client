import { recipeReducer } from '../../reducers/recipeReducer';
import fetchRecipes, { 
  surpriseClick,
  toggleExpand,
  fetchRecipesError,
  fetchRecipesSuccess,
  fetchRecipesRequest,
} from '../../actions';

import {
  searchRecipesSuccess,
  searchRecipesError
} from '../../actions/search';

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

  describe('fetchRecipesRequest', () => {
    it('Should replace the entire state', () => {
      const recipes = ['recipe1', 'recipe2']
      const _state = { 
        error: null,
        loading: true,
        recipes  
      }
        
      const state = recipeReducer(_state, fetchRecipesRequest());
      expect(state).toEqual(_state);
    });
  });

  describe('fetchRecipesError', () => {
    it('Should replace the entire state', () => {
      const err = 'err message';
      const recipes = ['recipe1', 'recipe2']
      const _state = { 
        error: err,
        loading: true,
        recipes  
      }
        
      const state = recipeReducer(_state, fetchRecipesError(err));
      expect(state).toEqual(_state);
    });
  });

  describe('fetchRecipes', () => {
    it('Should replace the entire state', () => {
      const recipes = ['recipe1', 'recipe2']
      const _state = { 
        error: null,
        loading: false,
        recipes  
      }
        
      const state = recipeReducer(_state, fetchRecipes());
      expect(state).toEqual(_state);
    });
  });

  describe('searchRecipeSuccess', () => {
    it('Should replace the entire state', () => {
      const recipes = ['recipe1', 'recipe2']
      const _state = { 
        error: null,
        loading: false,
        recipes  
      }
        
      const state = recipeReducer(_state, searchRecipesSuccess(recipes));
      expect(state).toEqual(_state);
    });
  });

  describe('searchRecipesError', () => {
    it('Should replace the entire state', () => {
      const err = 'err message';
      const recipes = ['recipe1', 'recipe2']
      const _state = { 
        error: err,
        loading: true,
        recipes  
      }
        
      const state = recipeReducer(_state, searchRecipesError(err));
      expect(state).toEqual(_state);
    });
  });

  describe('surpriseClick', () => {
    it('Should replace the entire state', () => {
      const randomRecipe = ['recipe1', 'recipe2']
      const _state = { 
        recipes: [randomRecipe],
        surprise: true,
      }
        
      const state = recipeReducer(_state, surpriseClick());
      expect(state).toEqual(_state);
    });
  });

  describe('toggleExpand', () => {
    it('Should replace the entire state', () => {
      const recipes = [{
        title: 'recipe1',
        expanded: true
      }]
      const _state = { 
        recipes
      }
        
      const state = recipeReducer(_state, toggleExpand());
      expect(state).toEqual(_state);
    });
  });

})
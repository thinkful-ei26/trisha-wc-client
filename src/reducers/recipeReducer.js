// import * as actions from '../actions';
import { FETCH_RECIPES_REQUEST, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions';

const initialState = {
  recipes: [
    // "Bath Blue",
    // "Barkham Blue",
    // "Buxton Blue"
  ],
  loading: false,
  error: null
}

export const recipeReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST : 
    return Object.assign({}, state, { loading: true })

    case FETCH_RECIPES_SUCCESS :
    return Object.assign({}, state, { 
      loading: false, 
      recipes: action.recipes, 
      error: null
    })

    case FETCH_RECIPES_ERROR :
    return Object.assign({}, state, { 
      loading: true,
      error: action.error
    })

    default: return state
  }
}

export default recipeReducer

import { FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_ERROR } from '../actions/surprise';


const initialState = {
  recipes: [],
  loading: false,
  error: null
}

export const surpriseReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPE_REQUEST : 
    return Object.assign({}, state, { loading: true })

    case FETCH_RECIPE_SUCCESS :
    return Object.assign({}, state, { 
      loading: false, 
      recipes: action.recipes, 
      error: null
    })

    case FETCH_RECIPE_ERROR :
    return Object.assign({}, state, { 
      loading: true,
      error: action.error
    })

    default: return state
  }
}

export default surpriseReducer;

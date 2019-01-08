import { API_BASE_URL } from '../config';
console.log('API_BASE_URL on client-side:', API_BASE_URL);

/* ========= CONTROLS ========== */
export const SURPRISE_CLICK = 'SURPRISE_CLICK';
export const surpriseClick = () => ({
  type: SURPRISE_CLICK
})

export const VIEW_ALL_RECIPES = 'VIEW_ALL_RECIPES';
export const allRecipes = () => ({
  type: VIEW_ALL_RECIPES
})

export const TOGGLE_EXPAND = 'TOGGLE_EXPAND';
export const toggleExpand = (id) => ({
  type: TOGGLE_EXPAND,
  id 
})


/* ========= FETCH RECIPE ASYNC ACTIONS ========== */
export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST,
})

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const fetchRecipesSuccess = (recipes) => ({
  type: FETCH_RECIPES_SUCCESS,
  recipes
})

export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';
export const fetchRecipesError = (error) => ({
  type: FETCH_RECIPES_ERROR,
  error
})

export default function fetchRecipes() {
  return dispatch => {
    dispatch(fetchRecipesRequest());

    fetch(`${API_BASE_URL}/api/recipes`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    })
      .then(res => {
        if(!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json()
      })
      .then( recipes => { 
        dispatch(fetchRecipesSuccess(recipes))
      })
      .catch( error => { dispatch(fetchRecipesError(error))
      })
  }
} 
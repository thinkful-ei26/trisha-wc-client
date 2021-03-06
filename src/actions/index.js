import { API_BASE_URL } from '../config';

/* ========= CONTROLS ========== */
export const SURPRISE_CLICK = 'SURPRISE_CLICK';
export const surpriseClick = (recipes) => ({
  type: SURPRISE_CLICK,
  recipes
})

export const VIEW_ALL_RECIPES = 'VIEW_ALL_RECIPES';
export const allRecipes = () => ({
  type: VIEW_ALL_RECIPES
})

export const TOGGLE_EXPAND = 'TOGGLE_EXPAND';
export const toggleExpand = (id, expanded) => ({
  type: TOGGLE_EXPAND,
  id, 
  expanded 
})

/* ========= ASYNC ACTIONS ========== */
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

    return fetch(`${API_BASE_URL}/api/recipes`, {
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

export function surpriseRecipes() {
  return dispatch => {
    dispatch(fetchRecipesRequest());

    return fetch(`${API_BASE_URL}/api/recipes`, {
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
      .then( recipes => {
        dispatch(surpriseClick(recipes))
      })
      .catch( error => { dispatch(fetchRecipesError(error))
      })
  }
} 
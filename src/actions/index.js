import { API_BASE_URL } from '../config';
console.log('API_BASE_URL on client-side:', API_BASE_URL);

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

export const TOGGLE_EXPAND = 'TOGGLE_EXPAND';
export const toggleExpand = (id) => ({
  type: TOGGLE_EXPAND,
  id 
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
        // console.log('res on recipe action index',res);
        return res.json()
      })
      .then( recipes => { 
        // console.log('recipes on recipe action index',recipes);
        dispatch(fetchRecipesSuccess(recipes))
      })
      .catch( error => { dispatch(fetchRecipesError(error))
      })
  }
} 

export const SEARCH_SUBMIT = 'SEARCH_SUBMIT';
export const searchSubmit = (searchTerm) => ({
  type: SEARCH_SUBMIT,
  searchTerm
})

// export const searchRecipes = searchTerm => dispatch => {
//   console.log('searchTerm from index action',this.searchTerm);
//   dispatch(fetchRecipesRequest());
//   fetch(`${API_BASE_URL}/api/recipes/?search=${searchTerm}`)
//     .then(res => {
//       if(!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       console.log('res on recipe action index',res);
//       return res.json()
//     })
//       .then(recipes => { 
//         console.log('recipes on recipe action index',recipes);
//         dispatch(fetchRecipesSuccess(recipes))
//       })
//       .catch(error => dispatch(fetchRecipesError(error)));
// };

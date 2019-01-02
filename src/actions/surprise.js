// import { API_BASE_URL } from '../config';
// console.log('API_BASE_URL on client-side:', API_BASE_URL);

// export const FETCH_RECIPE_REQUEST = 'FETCH_RECIPES_REQUEST';
// export const fetchRecipeRequest = () => ({
//   type: FETCH_RECIPE_REQUEST,
// })

// export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPES_SUCCESS';
// export const fetchRecipeSuccess = (recipe) => ({
//   type: FETCH_RECIPE_SUCCESS,
//   recipe
// })

// export const FETCH_RECIPE_ERROR = 'FETCH_RECIPE_ERROR';
// export const fetchRecipeError = (error) => ({
//   type: FETCH_RECIPE_ERROR,
//   error
// })

export const SURPRISE_CLICK = 'SURPRISE_CLICK';
export const surpriseClick = (recipes) => ({
  type: SURPRISE_CLICK,
  recipes
})

// export default function fetchSurprise() {
//   return dispatch => {
//     dispatch(fetchRecipeRequest);

//     fetch(`${API_BASE_URL}/api/recipes/`)
//       .then(res => {
//         if(!res.ok) {
//           return Promise.reject(res.statusText);
//         }
//         return res.json()
//       })
//       .then( recipe => { 
//         dispatch(fetchRecipeSuccess(recipe))
//       })
//       .catch( error => { dispatch(fetchRecipeError(error))
//       })
//   }
// } 
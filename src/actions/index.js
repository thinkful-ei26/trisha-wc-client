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

//current handler of search submit
/* export const SEARCH_SUBMIT = 'SEARCH_SUBMIT';
export const searchSubmit = (searchTerm) => ({
  type: SEARCH_SUBMIT,
  searchTerm
}) */

// ==== ignore below:
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
// === ignore end

// ==== lets make this an async call 

export const SEARCH_RECIPES_REQUEST = 'SEARCH_RECIPES_REQUEST';
export const searchRecipesRequest = () => ({
    type: SEARCH_RECIPES_REQUEST
});

export const SEARCH_RECIPES_SUCCESS = 'SEARCH_RECIPES_SUCCESS';
export const searchRecipesSuccess = recipes => ({
    type: SEARCH_RECIPES_SUCCESS,
    recipes
});

export const SEARCH_RECIPES_ERROR = 'SEARCH_RECIPES_ERROR';
export const searchRecipesError = error => ({
    type: SEARCH_RECIPES_ERROR,
    error
});

export function search(term) {
    return fetch(`${API_BASE_URL}/api/recipes/?search=${term}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
}

export const searchRecipes = searchTerm => dispatch => {
    dispatch(searchRecipesRequest());
    search(searchTerm)
        .then(recipes => {
            console.log('filtered recipe on search actions coming from success API call to DB', recipes)
            dispatch(searchRecipesSuccess(recipes))
        })
        .catch(error => dispatch(searchRecipesError(error)));
};


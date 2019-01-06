import { API_BASE_URL } from '../config';
console.log('API_BASE_URL SEARCH client-side:', API_BASE_URL);

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


import { API_BASE_URL } from '../config';

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
        console.log('res', res)
        console.log('term', term);
        return res.json();
    })
    .then(recipes => 
    {
        let filter;
        if (term) {
          filter = recipes.filter( recipe => {
            return recipe.title === term;
        })
            return filter;
        }
    });
}

export const searchRecipes = searchTerm => dispatch => {
    dispatch(searchRecipesRequest());
    search(searchTerm)
        .then(recipes => {
            console.log(recipes)
            dispatch(searchRecipesSuccess(recipes))
        })
        .catch(error => dispatch(searchRecipesError(error)));
};


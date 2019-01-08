import { 
  SEARCH_RECIPES_REQUEST,
  SEARCH_RECIPES_SUCCESS, 
  SEARCH_RECIPES_ERROR 
} from '../actions/search';

// import { TOGGLE_EXPAND } from '../actions/recipe';

import { 
  SURPRISE_CLICK, 
  // VIEW_ALL_RECIPES,
  SEARCH_CLICK,
  HOME_CLICK,
  TOGGLE_EXPAND  
} from '../actions/controls';

const initialState = {
  recipes: [],
  loading: false,
  error: null,
  surprise: null,
  search: false
}

export const searchReducer = (state=initialState, action) => {
  switch (action.type) {

    case SEARCH_CLICK : 
    return Object.assign({}, state, { search: true })

    case HOME_CLICK :
    console.log('state',state);
    return Object.assign({}, state, { 
      search: false,
    })

    case SURPRISE_CLICK : 
    const randomRecipePicker = (recipes) => {
      var recipe = recipes[Math.floor(Math.random()*recipes.length)];
      return recipe;
    }

    const randomRecipe = randomRecipePicker(state.recipes);
    
    return Object.assign({}, state, { 
      recipes: [randomRecipe],
      surprise: true
    })

    case SEARCH_RECIPES_REQUEST : 
    return Object.assign({}, state, { loading: true })

    case SEARCH_RECIPES_SUCCESS :
    return Object.assign({}, state, { 
      loading: false, 
      recipes: action.recipes, 
      error: null
    })

    case SEARCH_RECIPES_ERROR :
    return Object.assign({}, state, { 
      loading: true,
      error: action.error
    })

    case TOGGLE_EXPAND :

    // console.log('state TOGGLE_EXPAND searchReducer',state);
    // console.log('action TOGGLE_EXPAND searchReducer',action);

    // helper fn: find the clicked recipe by id and return the recipe obj
    const findById = (recipes, recipeId) => {
      const recipe = recipes.filter( (recipe, index) => { 
        return recipeId === recipe.id 
      })
      return recipe;
    }

    // invoke findById taking in the recipe list & the id of clicked recipe
    let [ clickedRecipe ] = findById(state.recipes, action.id);
    console.log('clickedRecipe',clickedRecipe);
 
    const indexClicked = state.recipes.indexOf(clickedRecipe);
    console.log('indexClicked', indexClicked);

    //updates the expanded prop of clicked recipe to true
    const setExpandedTrue = Object.assign({}, clickedRecipe, {expanded: true})
    console.log('setExpandedTrue', setExpandedTrue);

    //returns a new array of recipes with the expanded clicked recipe
    return Object.assign({}, state, {
        recipes: [setExpandedTrue]
      }
    )

    default: return state
  }
}

export default searchReducer;

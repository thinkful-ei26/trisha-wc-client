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
    return Object.assign({}, state, { 
      search: false 
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

    console.log('state TOGGLE_EXPAND searchReducer',state);
    console.log('action TOGGLE_EXPAND searchReducer',action);

    const findById = (recipes, recipeId) => {
      const recipe = recipes.filter( recipe => recipeId === recipe.id )
      return recipe;
    }

    /* ==== CONDITIONALLY CHANGE EXPANDED TRUE || FALSE ON CLICK OF LI ====*/
    let clickedRecipe = findById(state.recipes, action.id);

    // // console.log('recipeReducer state',state);
    console.log('clickedRecipe',clickedRecipe);
    // const expandedRecipe = Object.assign([], clickedRecipe[0], [...state.recipes,clickedRecipe[0].expanded = !state.expanded ])
    // console.log('expandedRecipe',expandedRecipe);

    // change the clickedRecipe to expanded true
    console.log('state.recipes',state.recipes)
    console.log('clickedRecipe[0]',clickedRecipe[0])
    // const setExpandedTrue = Object.assign({}, clickedRecipe, clickedRecipe[0].expanded = true)

    const setExpandedTrue = Object.assign({}, clickedRecipe[0], {expanded: true})
    console.log('setExpandedTrue', setExpandedTrue);

    // // console.log('action',action);
    return Object.assign({}, state, {
      recipes: [setExpandedTrue]
    })
    
    default: return state
  }
}

export default searchReducer;

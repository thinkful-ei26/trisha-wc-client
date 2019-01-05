import { 
  SEARCH_RECIPES_REQUEST,
  SEARCH_RECIPES_SUCCESS, 
  SEARCH_RECIPES_ERROR 
} from '../actions/search';

import { TOGGLE_EXPAND_SEARCH } from '../actions/recipe';

import { 
  SURPRISE_CLICK, 
  // VIEW_ALL_RECIPES,
  SEARCH_CLICK,
  HOME_CLICK 
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

    case TOGGLE_EXPAND_SEARCH :

      //returns the recipe that is clicked from searchForm id
      const findById = (state_recipes_array, action_id) => {
        const recipe = state_recipes_array.filter( recipe => action_id === recipe.id )
        return recipe;
      }

      let clickedRecipeSearch = findById(state.recipes, action.id);

      console.log('searchReducer state',state);
      console.log('clickedRecipeSearch', clickedRecipeSearch);

      // const expandedRecipeSearch = Object.assign({}, state,[clickedRecipeSearch[0].expanded = !state.expanded])
      // const expandedRecipe = Object.assign({}, clickedRecipe[0], [clickedRecipe[0].expanded = !state.expanded ])
      // console.log('expandedRecipe clicked',expandedRecipe);

      //   return Object.assign({}, state, {
      //     recipes: [...state.recipes] 
      //   })
      // }
    default: return state
  }
}

export default searchReducer;

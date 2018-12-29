import { TOGGLE_EXPAND } from '../actions/recipe';

const initialState = {
  expanded: false,
}

const recipeListReducer = (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_EXPAND : 
      return Object.assign({}, state, { expanded: !action.expanded })
    // if(action.type.expanded) {
    //   return Object.assign({}, state, { expanded: false})
    // } 
    // if (!action.type.expanded) {
    //   return Object.assign({}, state, { expanded: true})
    // }
    // break;
  default : return state;
  }
}

export default recipeListReducer;
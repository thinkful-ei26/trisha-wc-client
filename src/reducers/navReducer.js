import { 
  INFO_CLICK, 
  GOT_IT, 
  ADD_RECIPE, 
  CANCEL_ADD_RECIPE,
} from '../actions/nav';

const initialState = {
  info: false,
  addRecipe: false
}

const navReducer = (state=initialState, action) => {
  switch (action.type) {
    case INFO_CLICK : 
    return Object.assign({}, state, { info: true })

    case GOT_IT :
    return Object.assign({}, state, { 
      info: false 
    })

    case ADD_RECIPE :
    window.scrollTo(0, 0);
    return Object.assign({}, state, { 
      addRecipe: true, 
      info: false
    })

    case CANCEL_ADD_RECIPE :
    return Object.assign({}, state, { 
      addRecipe: false, 
      info: false
    })

  default : return state;
  }
}

export default navReducer;
import { INFO_CLICK, GOT_IT, ADD_RECIPE } from '../reducers';

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
    return Object.assign({}, state, { 
      addRecipe: true
    })

  default : return state;
  }
}

export default navReducer;
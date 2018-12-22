import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

/* Combined rootReducer from index */
// import rootReducer from './reducers/index';
// export default createStore( rootReducer, applyMiddleware(thunk))

/* recipeReducer */
import recipeReducer from './reducers/recipeReducer';
// export default createStore( recipeReducer, applyMiddleware(thunk))

/* navReducer */
import navReducer from './reducers/navReducer';
// export default createStore( navReducer, applyMiddleware(thunk))

export default createStore(
  combineReducers({
    form: formReducer,
    recipeReducer,
    navReducer
  })
)
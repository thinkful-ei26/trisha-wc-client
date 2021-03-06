import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import recipeReducer from './reducers/recipeReducer';
import navReducer from './reducers/navReducer';

export default createStore(
  combineReducers({
    form: formReducer,
    recipeReducer,
    navReducer,
  }),
  applyMiddleware(thunk)
)
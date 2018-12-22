import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/* Combined rootReducer from index */
// import rootReducer from './reducers/index';
// export default createStore( rootReducer, applyMiddleware(thunk))

/* recipeReducer */
// import recipeReducer from './reducers/recipeReducer';
// export default createStore( recipeReducer, applyMiddleware(thunk))

/* navReducer */
import navReducer from './reducers/navReducer';
export default createStore( navReducer, applyMiddleware(thunk))
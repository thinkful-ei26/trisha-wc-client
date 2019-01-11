import { navReducer } from '../../reducers/navReducer';
import { 
  INFO_CLICK, 
  GOT_IT, 
  ADD_RECIPE, 
  CANCEL_ADD_RECIPE,
} from '../../actions/nav';

describe.skip('navReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = navReducer(undefined, {type: '__UNKNOWN'});
    console.log(state.debug())
    expect(state).toEqual({
      info: false,
      addRecipe: false
    });
});

// it('Should return the current state on an unknown action', () => {
//     let currentState = {};
//     const state = navReducer(currentState, {type: '__UNKNOWN'});
//     expect(state).toBe(currentState);
// });

})
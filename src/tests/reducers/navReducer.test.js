import navReducer from '../../reducers/navReducer';
import { 
  infoClick,
  gotIt,
  addRecipe,
  cancel
} from '../../actions/nav';

describe('navReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = navReducer(undefined, {type: '__UNKNOWN'});
    console.log(state);
    expect(state).toEqual({
      info: false,
      addRecipe: false
    });
});

it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = navReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
});



describe('infoClick', () => {
  it('Should replace the entire state', () => {
    const _state = { 
      info: true
    }
      
    const state = navReducer(_state, infoClick());
    expect(state).toEqual(_state);
  });
});

describe('gotIt', () => {
  it('Should replace the entire state', () => {
    const _state = { 
      info: false
    }
      
    const state = navReducer(_state, gotIt());
    expect(state).toEqual(_state);
  });
});

describe('cancel', () => {
  it('Should replace the entire state', () => {
    const _state = { 
      addRecipe: false, 
      info: false
    }
      
    const state = navReducer(_state, cancel());
    expect(state).toEqual(_state);
  });
});

// describe('addRecipe', () => {
//   it('Should replace the entire state', () => {
//     const _state = { 
//       addRecipe: true,
//       info: false
//     }
      
//     const state = navReducer(_state, addRecipe());
//     expect(state).toEqual(_state);
//   });
// });

})
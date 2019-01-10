import {
  INFO_CLICK,
  infoClick,
  GOT_IT,
  gotIt,
  ADD_RECIPE,
  addRecipe,
  CANCEL_ADD_RECIPE,
  cancel
} from './nav';

describe('addRecipe', () => {
  it('Should return action', () => {
    const data = {};
    const action = addRecipe(data);
    expect(action.type).toEqual(ADD_RECIPE);
    expect(action.data).toEqual(data);
  })
})

describe('infoClick', () => {
  it('Should return the action', () => {
    const action = infoClick();
    expect(action.type).toEqual(INFO_CLICK);
  })
})

describe('gotIt', () => {
  it('Should return the action', () => {
    const action = gotIt();
    expect(action.type).toEqual(GOT_IT);
  })
})

describe('cancel', () => {
  it('Should return the action', () => {
    const action = cancel();
    expect(action.type).toEqual(CANCEL_ADD_RECIPE);
  })
})